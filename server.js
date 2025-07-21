const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Import data
const { categories } = require('./src/data/categories');
const { products } = require('./src/data/products');

const app = express();
const PORT = process.env.PORT || 3001;
const isDevelopment = process.env.NODE_ENV !== 'production';

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Helper function to simulate API delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// API Response wrapper
const createResponse = (data, success = true, message = '', meta = {}) => ({
  success,
  data,
  message,
  meta,
  timestamp: new Date().toISOString()
});

// Routes

// Health check
app.get('/', (req, res) => {
  res.json({
    message: 'E-commerce API is running!',
    version: '1.0.0',
    endpoints: {
      categories: '/api/categories',
      products: '/api/products',
      stats: '/api/stats',
      documentation: '/api/docs'
    }
  });
});

// API Documentation
app.get('/api/docs', (req, res) => {
  res.json({
    title: 'E-commerce API Documentation',
    version: '1.0.0',
    description: 'REST API for e-commerce applications with local data',
    baseUrl: `http://localhost:${PORT}`,
    endpoints: {
      categories: {
        'GET /api/categories': {
          description: 'Get all product categories',
          parameters: {},
          response: 'Array of category objects'
        },
        'GET /api/categories/:id': {
          description: 'Get category by ID',
          parameters: { id: 'Category ID (integer)' },
          response: 'Category object'
        }
      },
      products: {
        'GET /api/products': {
          description: 'Get products with optional filtering and pagination',
          parameters: {
            category: 'Filter by category ID',
            search: 'Search in product name and description',
            minPrice: 'Minimum price filter',
            maxPrice: 'Maximum price filter',
            page: 'Page number (default: 1)',
            limit: 'Items per page (default: 10, max: 50)',
            sortBy: 'Sort by: name, price, rating, createdAt (default: createdAt)',
            sortOrder: 'Sort order: asc, desc (default: desc)',
            inStock: 'Filter by stock availability (true/false)',
            brand: 'Filter by brand name'
          },
          response: 'Object with products array, pagination info, and filters'
        },
        'GET /api/products/:id': {
          description: 'Get product by ID',
          parameters: { id: 'Product ID (integer)' },
          response: 'Product object with category info'
        },
        'GET /api/products/featured': {
          description: 'Get featured products (rating >= 4.5)',
          parameters: { limit: 'Number of products (default: 6)' },
          response: 'Array of featured products'
        },
        'GET /api/products/search/:query': {
          description: 'Search products by query',
          parameters: { 
            query: 'Search term',
            limit: 'Number of results (default: 20)'
          },
          response: 'Array of matching products'
        }
      },
      stats: {
        'GET /api/stats': {
          description: 'Get store statistics',
          parameters: {},
          response: 'Statistics object'
        }
      }
    },
    examples: {
      'Get all products': `GET ${req.protocol}://${req.get('host')}/api/products`,
      'Filter by category': `GET ${req.protocol}://${req.get('host')}/api/products?category=1`,
      'Search products': `GET ${req.protocol}://${req.get('host')}/api/products?search=آيفون`,
      'Price range filter': `GET ${req.protocol}://${req.get('host')}/api/products?minPrice=100&maxPrice=5000`,
      'Pagination': `GET ${req.protocol}://${req.get('host')}/api/products?page=2&limit=5`,
      'Sorting': `GET ${req.protocol}://${req.get('host')}/api/products?sortBy=price&sortOrder=asc`
    }
  });
});

// Categories endpoints
app.get('/api/categories', async (req, res) => {
  try {
    await delay(200);
    
    const categoriesWithCounts = categories.map(category => ({
      ...category,
      productCount: products.filter(product => product.categoryId === category.id).length
    }));

    res.json(createResponse(categoriesWithCounts, true, '', {
      total: categoriesWithCounts.length
    }));
  } catch (error) {
    res.status(500).json(createResponse(null, false, 'Error fetching categories'));
  }
});

app.get('/api/categories/:id', async (req, res) => {
  try {
    await delay(150);
    
    const categoryId = parseInt(req.params.id);
    const category = categories.find(cat => cat.id === categoryId);
    
    if (!category) {
      return res.status(404).json(createResponse(null, false, 'Category not found'));
    }

    const categoryWithCount = {
      ...category,
      productCount: products.filter(product => product.categoryId === category.id).length
    };

    res.json(createResponse(categoryWithCount));
  } catch (error) {
    res.status(500).json(createResponse(null, false, 'Error fetching category'));
  }
});

// Products endpoints
app.get('/api/products', async (req, res) => {
  try {
    await delay(400);
    
    const {
      category,
      search,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      inStock,
      brand
    } = req.query;

    let filteredProducts = [...products];

    // Apply filters
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.categoryId === parseInt(category)
      );
    }

    if (search) {
      const searchTerm = search.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.nameEn.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
      );
    }

    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(product =>
        product.price >= parseFloat(minPrice)
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(product =>
        product.price <= parseFloat(maxPrice)
      );
    }

    if (inStock !== undefined) {
      filteredProducts = filteredProducts.filter(product =>
        product.inStock === (inStock === 'true')
      );
    }

    if (brand) {
      filteredProducts = filteredProducts.filter(product =>
        product.brand.toLowerCase().includes(brand.toLowerCase())
      );
    }

    // Sorting
    filteredProducts.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === 'price' || sortBy === 'rating') {
        aValue = parseFloat(aValue);
        bValue = parseFloat(bValue);
      } else if (sortBy === 'createdAt' || sortBy === 'updatedAt') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      } else {
        aValue = aValue.toString().toLowerCase();
        bValue = bValue.toString().toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    // Pagination
    const pageNum = parseInt(page);
    const limitNum = Math.min(parseInt(limit), 50);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    // Add category info to products
    const productsWithCategory = paginatedProducts.map(product => ({
      ...product,
      category: categories.find(cat => cat.id === product.categoryId)
    }));

    const pagination = {
      currentPage: pageNum,
      totalPages: Math.ceil(filteredProducts.length / limitNum),
      totalItems: filteredProducts.length,
      itemsPerPage: limitNum,
      hasNextPage: endIndex < filteredProducts.length,
      hasPrevPage: pageNum > 1
    };

    const appliedFilters = {
      category: category || null,
      search: search || null,
      minPrice: minPrice || null,
      maxPrice: maxPrice || null,
      sortBy,
      sortOrder,
      inStock: inStock || null,
      brand: brand || null
    };

    res.json(createResponse({
      products: productsWithCategory,
      pagination,
      filters: appliedFilters
    }));
  } catch (error) {
    res.status(500).json(createResponse(null, false, 'Error fetching products'));
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    await delay(200);
    
    const productId = parseInt(req.params.id);
    const product = products.find(prod => prod.id === productId);
    
    if (!product) {
      return res.status(404).json(createResponse(null, false, 'Product not found'));
    }
    
    const productWithCategory = {
      ...product,
      category: categories.find(cat => cat.id === product.categoryId)
    };
    
    res.json(createResponse(productWithCategory));
  } catch (error) {
    res.status(500).json(createResponse(null, false, 'Error fetching product'));
  }
});

app.get('/api/products/featured', async (req, res) => {
  try {
    await delay(300);
    
    const limit = Math.min(parseInt(req.query.limit) || 6, 20);
    const featuredProducts = products
      .filter(product => product.rating >= 4.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit)
      .map(product => ({
        ...product,
        category: categories.find(cat => cat.id === product.categoryId)
      }));
    
    res.json(createResponse(featuredProducts, true, '', {
      total: featuredProducts.length,
      criteria: 'rating >= 4.5'
    }));
  } catch (error) {
    res.status(500).json(createResponse(null, false, 'Error fetching featured products'));
  }
});

app.get('/api/products/search/:query', async (req, res) => {
  try {
    await delay(350);
    
    const query = req.params.query.toLowerCase();
    const limit = Math.min(parseInt(req.query.limit) || 20, 50);
    
    const searchResults = products
      .filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.nameEn.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      )
      .slice(0, limit)
      .map(product => ({
        ...product,
        category: categories.find(cat => cat.id === product.categoryId)
      }));
    
    res.json(createResponse(searchResults, true, '', {
      query: req.params.query,
      total: searchResults.length
    }));
  } catch (error) {
    res.status(500).json(createResponse(null, false, 'Error searching products'));
  }
});

// Statistics endpoint
app.get('/api/stats', async (req, res) => {
  try {
    await delay(250);
    
    const stats = {
      totalProducts: products.length,
      totalCategories: categories.length,
      averagePrice: products.reduce((sum, product) => sum + product.price, 0) / products.length,
      inStockProducts: products.filter(product => product.inStock).length,
      outOfStockProducts: products.filter(product => !product.inStock).length,
      topRatedProducts: products.filter(product => product.rating >= 4.5).length,
      brands: [...new Set(products.map(product => product.brand))].length,
      priceRange: {
        min: Math.min(...products.map(p => p.price)),
        max: Math.max(...products.map(p => p.price))
      },
      categoryBreakdown: categories.map(category => ({
        id: category.id,
        name: category.name,
        productCount: products.filter(p => p.categoryId === category.id).length
      }))
    };
    
    res.json(createResponse(stats));
  } catch (error) {
    res.status(500).json(createResponse(null, false, 'Error fetching statistics'));
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json(createResponse(null, false, 'Endpoint not found', {
    availableEndpoints: [
      'GET /',
      'GET /api/docs',
      'GET /api/categories',
      'GET /api/categories/:id',
      'GET /api/products',
      'GET /api/products/:id',
      'GET /api/products/featured',
      'GET /api/products/search/:query',
      'GET /api/stats'
    ]
  }));
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json(createResponse(null, false, 'Internal server error', {
    error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  }));
});

// Start server only in development mode
if (isDevelopment) {
  app.listen(PORT, () => {
    console.log(`🚀 E-commerce API server is running on port ${PORT}`);
    console.log(`📚 API Documentation: http://localhost:${PORT}/api/docs`);
    console.log(`🏷️  Categories: http://localhost:${PORT}/api/categories`);
    console.log(`📦 Products: http://localhost:${PORT}/api/products`);
    console.log(`📊 Statistics: http://localhost:${PORT}/api/stats`);
  });
}

module.exports = app;
