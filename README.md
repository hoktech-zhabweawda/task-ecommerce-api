# 🛒 E-commerce API - واجهة برمجة التطبيقات للتجارة الإلكترونية

API REST كامل للتجارة الإلكترونية مع بيانات محلية، مصمم خصيصاً لاختبار مطوري الواجهات الأمامية (Frontend Developers).

## 📋 نظرة عامة

هذا الـ API يوفر:
- ✅ REST API كامل للتجارة الإلكترونية مع بيانات محلية
- ✅ فئات المنتجات (Categories) مع الصور والأوصاف
- ✅ منتجات شاملة مع تفاصيل كاملة
- ✅ نظام فلترة متقدم (البحث، السعر، الفئة، الترتيب)
- ✅ نظام ترقيم الصفحات (Pagination)
- ✅ إحصائيات المتجر
- ✅ توثيق تفاعلي شامل

## 🚀 التشغيل السريع

### المتطلبات
- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### التثبيت والتشغيل

```bash
# تثبيت المكتبات
npm install

# تشغيل الـ API في وضع التطوير
npm run dev

# تشغيل الـ API في وضع الإنتاج
npm start
```

سيتم تشغيل الـ API على: `http://localhost:3001`

### الوصول السريع (التطوير المحلي)
- **التوثيق التفاعلي**: http://localhost:3001/api/docs
- **الفئات**: http://localhost:3001/api/categories
- **المنتجات**: http://localhost:3001/api/products
- **الإحصائيات**: http://localhost:3001/api/stats

## 🚀 النشر على Vercel

### الطريقة الأولى: من خلال GitHub
1. ارفع الكود إلى GitHub repository
2. اذهب إلى [Vercel.com](https://vercel.com)
3. اربط حسابك مع GitHub
4. اختر المشروع واضغط Deploy
5. سيتم النشر تلقائياً!

### الطريقة الثانية: Vercel CLI
```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# نشر المشروع
vercel

# للنشر في الإنتاج
vercel --prod
```

### الطريقة الثالثة: رفع مباشر
1. اضغط زر "Deploy" في [Vercel.com](https://vercel.com)
2. اختر "Browse" ورفع مجلد المشروع
3. انتظر حتى يكتمل النشر

### بعد النشر
سيكون الـ API متاحاً على رابط مثل:
- `https://your-project-name.vercel.app/api/docs`
- `https://your-project-name.vercel.app/api/categories`
- `https://your-project-name.vercel.app/api/products`

## 📚 توثيق API

### 🏷️ Categories API

#### الحصول على جميع الفئات
```bash
# GET /api/categories
curl http://localhost:3001/api/categories

# GET /api/categories/:id
curl http://localhost:3001/api/categories/1
```

#### استخدام JavaScript/Fetch
```javascript
// الحصول على جميع الفئات
const response = await fetch('http://localhost:3001/api/categories');
const data = await response.json();
console.log(data.data); // مصفوفة الفئات

// الحصول على فئة محددة
const category = await fetch('http://localhost:3001/api/categories/1');
const categoryData = await category.json();
```

#### بنية بيانات الفئة
```javascript
{
  id: 1,
  name: "الإلكترونيات",
  nameEn: "Electronics", 
  description: "أجهزة إلكترونية وتقنية حديثة",
  image: "https://example.com/image.jpg",
  productCount: 25
}
```

### 📦 Products API

#### الحصول على المنتجات مع الفلترة
```bash
# الحصول على جميع المنتجات
curl http://localhost:3001/api/products

# فلترة المنتجات
curl "http://localhost:3001/api/products?category=1&search=iPhone&minPrice=100&maxPrice=5000&page=1&limit=12&sortBy=price&sortOrder=asc&inStock=true&brand=Apple"

# الحصول على منتج محدد
curl http://localhost:3001/api/products/1

# الحصول على المنتجات المميزة
curl "http://localhost:3001/api/products/featured?limit=6"

# البحث في المنتجات
curl "http://localhost:3001/api/products/search/laptop?limit=20"
```

#### استخدام JavaScript/Fetch
```javascript
// الحصول على جميع المنتجات
const response = await fetch('http://localhost:3001/api/products');
const data = await response.json();

// فلترة المنتجات
const params = new URLSearchParams({
  category: 1,
  search: "iPhone",
  minPrice: 100,
  maxPrice: 5000,
  page: 1,
  limit: 12,
  sortBy: "price",
  sortOrder: "asc"
});

const filteredResponse = await fetch(`http://localhost:3001/api/products?${params}`);
const filteredData = await filteredResponse.json();

// الحصول على منتج محدد
const product = await fetch('http://localhost:3001/api/products/1');
const productData = await product.json();
```

#### بنية بيانات المنتج
```javascript
{
  id: 1,
  name: "آيفون 15 برو",
  nameEn: "iPhone 15 Pro",
  description: "هاتف ذكي متطور مع كاميرا احترافية وأداء عالي",
  price: 4999.99,
  originalPrice: 5499.99,
  categoryId: 1,
  image: "https://example.com/image.jpg",
  images: ["url1", "url2"],
  inStock: true,
  stockQuantity: 25,
  rating: 4.8,
  reviewCount: 156,
  brand: "Apple",
  tags: ["smartphone", "ios", "premium"],
  specifications: {
    "الشاشة": "6.1 بوصة Super Retina XDR",
    "المعالج": "A17 Pro"
  },
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-20T14:45:00Z",
  category: { /* بيانات الفئة */ }
}
```

#### بنية الاستجابة مع الترقيم
```javascript
{
  success: true,
  data: {
    products: [...], // مصفوفة المنتجات
    pagination: {
      currentPage: 1,
      totalPages: 5,
      totalItems: 50,
      itemsPerPage: 12,
      hasNextPage: true,
      hasPrevPage: false
    },
    filters: {
      categoryId: 1,
      search: "آيفون",
      minPrice: 100,
      maxPrice: 5000,
      sortBy: "price",
      sortOrder: "asc"
    }
  },
  timestamp: "2024-01-20T10:30:00Z"
}
```

### 📊 Statistics API

```javascript
import { statsAPI } from './src/services/api.js';

const stats = await statsAPI.getOverview();
console.log(stats.data);
```

#### بنية إحصائيات المتجر
```javascript
{
  totalProducts: 195,
  totalCategories: 8,
  averagePrice: 1250.75,
  inStockProducts: 180,
  outOfStockProducts: 15,
  topRatedProducts: 45,
  brands: 25
}
```

## 🎯 أمثلة للاختبار

### مثال 1: عرض المنتجات مع الفلترة
```javascript
import React, { useState, useEffect } from 'react';
import { productsAPI } from './services/api';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    categoryId: '',
    page: 1,
    limit: 12
  });

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await productsAPI.getAll(filters);
      if (response.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* عرض المنتجات */}
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} ر.س</p>
        </div>
      ))}
    </div>
  );
}
```

### مثال 2: البحث المباشر
```javascript
import React, { useState, useEffect } from 'react';
import { productsAPI } from './services/api';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      searchProducts();
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const searchProducts = async () => {
    try {
      const response = await productsAPI.search(searchTerm, 10);
      if (response.success) {
        setResults(response.data);
      }
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث عن المنتجات..."
      />
      {/* عرض النتائج */}
    </div>
  );
}
```

## 🛠️ بنية المشروع

```
src/
├── components/          # مكونات React
│   ├── ProductCard.jsx     # بطاقة المنتج
│   ├── CategoryCard.jsx    # بطاقة الفئة
│   ├── SearchBar.jsx       # شريط البحث
│   ├── FilterPanel.jsx     # لوحة الفلاتر
│   ├── Pagination.jsx      # ترقيم الصفحات
│   ├── StatsOverview.jsx   # نظرة عامة على الإحصائيات
│   └── LoadingSpinner.jsx  # مؤشر التحميل
├── data/               # البيانات المحلية
│   ├── categories.js      # بيانات الفئات
│   └── products.js        # بيانات المنتجات
├── services/           # طبقة الخدمات
│   └── api.js            # API محاكي
├── App.jsx            # المكون الرئيسي
├── main.jsx           # نقطة الدخول
└── index.css          # الأنماط
```

## 🎨 الميزات المتاحة

### ✅ فلترة متقدمة
- البحث في الاسم والوصف والعلامة التجارية
- فلترة حسب الفئة
- فلترة حسب نطاق السعر
- فلترة حسب التوفر
- فلترة حسب العلامة التجارية
- فلترة حسب العلامات (Tags)

### ✅ ترتيب مرن
- ترتيب حسب الاسم
- ترتيب حسب السعر
- ترتيب حسب التقييم
- ترتيب حسب تاريخ الإضافة
- ترتيب تصاعدي أو تنازلي

### ✅ ترقيم الصفحات
- تحديد عدد المنتجات في الصفحة
- التنقل بين الصفحات
- معلومات الصفحة الحالية والإجمالية

### ✅ واجهة مستخدم متجاوبة
- تصميم متجاوب لجميع الأجهزة
- أنماط CSS حديثة
- تأثيرات بصرية جذابة
- دعم اللغة العربية

## 🧪 اختبارات للمطورين

### اختبار 1: إنشاء مكون فلترة مخصص
قم بإنشاء مكون فلترة جديد يتيح:
- فلترة حسب نطاق التقييم
- فلترة حسب نطاق تاريخ الإضافة
- فلترة متعددة الاختيار للعلامات التجارية

### اختبار 2: إضافة ميزة المفضلة
- إضافة نظام المفضلة للمنتجات
- حفظ المفضلة في localStorage
- عرض صفحة منفصلة للمفضلة

### اختبار 3: سلة التسوق
- إنشاء نظام سلة تسوق
- إضافة وحذف المنتجات
- حساب الإجمالي والضرائب

### اختبار 4: تحسين الأداء
- تطبيق lazy loading للصور
- تطبيق virtual scrolling للقوائم الطويلة
- تحسين البحث باستخدام debouncing

## 📱 التوافق

- ✅ React 18+
- ✅ جميع المتصفحات الحديثة
- ✅ الأجهزة المحمولة والحاسوب
- ✅ دعم RTL للغة العربية

## 🤝 المساهمة

هذا المشروع مفتوح المصدر ومرحب بالمساهمات:
1. Fork المشروع
2. إنشاء branch جديد للميزة
3. Commit التغييرات
4. Push إلى البranch
5. إنشاء Pull Request

## 📄 الترخيص

MIT License - يمكن استخدام المشروع بحرية للأغراض التعليمية والتجارية.

---

**ملاحظة**: هذا المشروع مصمم للاختبار والتعلم. البيانات محلية ولا تتطلب خادم خلفي.
