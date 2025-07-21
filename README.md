# Frontend Developer Task - E-commerce API

## Task Overview

This is a practical task for frontend developers to demonstrate their skills by building a complete e-commerce interface using the provided REST API.

## Your Mission

Build a modern, responsive e-commerce website using this API. You can use any frontend framework or vanilla JavaScript.

## API Information

**Base URL**: https://task-ecommerce-api.vercel.app
**Documentation**: https://task-ecommerce-api.vercel.app/api/docs

## What You Need to Build

Create a complete e-commerce frontend that includes:

### Required Features
- Product listing page with grid layout
- Product search functionality
- Category filtering
- Price range filtering
- Product sorting (by name, price, rating)
- Pagination for products
- Individual product detail pages
- Shopping cart functionality
- Responsive design for mobile and desktop

### Bonus Features (Optional)
- User favorites/wishlist
- Product comparison
- Advanced filters (brand, rating, availability)
- Loading states and error handling
- Dark/light theme toggle

## Available API Endpoints

### Categories
- GET /api/categories - Get all product categories
- GET /api/categories/:id - Get specific category

### Products
- GET /api/products - Get all products with filtering options
- GET /api/products/:id - Get specific product
- GET /api/products/featured - Get featured products
- GET /api/products/search/:query - Search products

### Statistics
- GET /api/stats - Get store statistics

## API Usage Examples

### Get All Products
```javascript
fetch('https://task-ecommerce-api.vercel.app/api/products')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Search Products
```javascript
fetch('https://task-ecommerce-api.vercel.app/api/products?search=laptop')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Filter by Category
```javascript
fetch('https://task-ecommerce-api.vercel.app/api/products?category=1')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Filter by Price Range
```javascript
fetch('https://task-ecommerce-api.vercel.app/api/products?minPrice=100&maxPrice=1000')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Available Query Parameters

### For Products Endpoint (/api/products)
- category - Filter by category ID
- search - Search in product name and description
- minPrice - Minimum price filter
- maxPrice - Maximum price filter
- page - Page number for pagination
- limit - Items per page (max 50)
- sortBy - Sort by: name, price, rating, createdAt
- sortOrder - Sort order: asc, desc
- inStock - Filter by availability (true/false)
- brand - Filter by brand name

### Example with Multiple Filters
```
/api/products?category=1&search=phone&minPrice=500&maxPrice=2000&sortBy=price&sortOrder=asc&page=1&limit=10
```

## Task Requirements

### Technical Requirements
- Use any frontend framework (React, Vue, Angular) or vanilla JavaScript
- Responsive design (mobile-first approach)
- Clean, readable code with proper structure
- Error handling for API calls
- Loading states for better user experience

### Evaluation Criteria
- Code quality and organization
- User interface design and usability
- Proper use of the API endpoints
- Responsive design implementation
- Error handling and edge cases
- Performance optimization

## Submission Guidelines

1. Create your frontend project
2. Deploy it to any hosting platform (Netlify, Vercel, GitHub Pages)
3. Provide the live demo URL
4. Include source code repository link
5. Add a README with setup instructions

## Repository Information

- **GitHub**: https://github.com/hoktech-zhabweawda/task-ecommerce-api
- **Clone**: git clone https://github.com/hoktech-zhabweawda/task-ecommerce-api.git
- **License**: MIT License

Good luck with your task!

