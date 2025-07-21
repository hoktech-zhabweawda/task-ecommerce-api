const products = [
  // Electronics (categoryId: 1)
  {
    id: 1,
    name: "آيفون 15 برو",
    nameEn: "iPhone 15 Pro",
    description: "هاتف ذكي متطور مع كاميرا احترافية وأداء عالي",
    price: 4999.99,
    originalPrice: 5499.99,
    categoryId: 1,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 25,
    rating: 4.8,
    reviewCount: 156,
    brand: "Apple",
    tags: ["smartphone", "ios", "premium"],
    specifications: {
      "الشاشة": "6.1 بوصة Super Retina XDR",
      "المعالج": "A17 Pro",
      "الذاكرة": "128GB",
      "الكاميرا": "48MP + 12MP + 12MP"
    },
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-20T14:45:00Z"
  },
  {
    id: 2,
    name: "لابتوب ديل XPS 13",
    nameEn: "Dell XPS 13 Laptop",
    description: "لابتوب خفيف الوزن مع شاشة عالية الدقة ومعالج قوي",
    price: 3299.99,
    originalPrice: 3599.99,
    categoryId: 1,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 15,
    rating: 4.6,
    reviewCount: 89,
    brand: "Dell",
    tags: ["laptop", "ultrabook", "business"],
    specifications: {
      "الشاشة": "13.3 بوصة 4K",
      "المعالج": "Intel Core i7",
      "الذاكرة": "16GB RAM",
      "التخزين": "512GB SSD"
    },
    createdAt: "2024-01-10T08:15:00Z",
    updatedAt: "2024-01-18T16:20:00Z"
  },
  {
    id: 3,
    name: "سماعات سوني WH-1000XM5",
    nameEn: "Sony WH-1000XM5 Headphones",
    description: "سماعات لاسلكية مع إلغاء الضوضاء المتقدم وجودة صوت عالية",
    price: 899.99,
    originalPrice: 999.99,
    categoryId: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 40,
    rating: 4.7,
    reviewCount: 234,
    brand: "Sony",
    tags: ["headphones", "wireless", "noise-cancelling"],
    specifications: {
      "النوع": "لاسلكية",
      "البطارية": "30 ساعة",
      "إلغاء الضوضاء": "متقدم",
      "الاتصال": "Bluetooth 5.2"
    },
    createdAt: "2024-01-08T12:00:00Z",
    updatedAt: "2024-01-22T09:30:00Z"
  },

  // Clothing (categoryId: 2)
  {
    id: 4,
    name: "قميص قطني كلاسيكي",
    nameEn: "Classic Cotton Shirt",
    description: "قميص رجالي من القطن الخالص بتصميم كلاسيكي أنيق",
    price: 149.99,
    originalPrice: 199.99,
    categoryId: 2,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 50,
    rating: 4.3,
    reviewCount: 67,
    brand: "Fashion Plus",
    tags: ["shirt", "cotton", "formal"],
    specifications: {
      "المادة": "قطن 100%",
      "المقاسات": "S, M, L, XL, XXL",
      "الألوان": "أبيض، أزرق، رمادي",
      "العناية": "غسيل آلة"
    },
    createdAt: "2024-01-12T14:20:00Z",
    updatedAt: "2024-01-19T11:15:00Z"
  },
  {
    id: 5,
    name: "فستان صيفي أنيق",
    nameEn: "Elegant Summer Dress",
    description: "فستان نسائي خفيف ومريح مناسب للصيف بألوان زاهية",
    price: 299.99,
    originalPrice: 399.99,
    categoryId: 2,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 30,
    rating: 4.5,
    reviewCount: 92,
    brand: "Summer Style",
    tags: ["dress", "summer", "casual"],
    specifications: {
      "المادة": "قطن وبوليستر",
      "المقاسات": "XS, S, M, L, XL",
      "الألوان": "أزرق، وردي، أصفر",
      "الطول": "متوسط"
    },
    createdAt: "2024-01-14T16:45:00Z",
    updatedAt: "2024-01-21T13:20:00Z"
  },

  // Home & Garden (categoryId: 3)
  {
    id: 6,
    name: "طقم أواني طبخ ستانلس ستيل",
    nameEn: "Stainless Steel Cookware Set",
    description: "طقم أواني طبخ من الستانلس ستيل عالي الجودة مكون من 12 قطعة",
    price: 799.99,
    originalPrice: 999.99,
    categoryId: 3,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 20,
    rating: 4.6,
    reviewCount: 145,
    brand: "Kitchen Pro",
    tags: ["cookware", "stainless-steel", "kitchen"],
    specifications: {
      "المادة": "ستانلس ستيل 18/10",
      "عدد القطع": "12 قطعة",
      "مناسب لـ": "جميع أنواع المواقد",
      "الضمان": "10 سنوات"
    },
    createdAt: "2024-01-09T10:30:00Z",
    updatedAt: "2024-01-17T15:40:00Z"
  },

  // Sports & Fitness (categoryId: 4)
  {
    id: 7,
    name: "دراجة هوائية جبلية",
    nameEn: "Mountain Bike",
    description: "دراجة هوائية جبلية متينة مع نظام تعليق متقدم",
    price: 1299.99,
    originalPrice: 1599.99,
    categoryId: 4,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.7,
    reviewCount: 78,
    brand: "Mountain Pro",
    tags: ["bike", "mountain", "outdoor"],
    specifications: {
      "الإطار": "ألومنيوم خفيف",
      "العجلات": "27.5 بوصة",
      "السرعات": "21 سرعة",
      "الوزن": "13.5 كيلو"
    },
    createdAt: "2024-01-11T09:15:00Z",
    updatedAt: "2024-01-20T12:30:00Z"
  },

  // Books & Education (categoryId: 5)
  {
    id: 8,
    name: "كتاب تعلم البرمجة",
    nameEn: "Programming Learning Book",
    description: "دليل شامل لتعلم البرمجة للمبتدئين مع أمثلة عملية",
    price: 89.99,
    originalPrice: 119.99,
    categoryId: 5,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 100,
    rating: 4.4,
    reviewCount: 203,
    brand: "Tech Books",
    tags: ["book", "programming", "education"],
    specifications: {
      "الصفحات": "450 صفحة",
      "اللغة": "العربية",
      "المستوى": "مبتدئ إلى متوسط",
      "الطبعة": "الثانية"
    },
    createdAt: "2024-01-07T11:20:00Z",
    updatedAt: "2024-01-16T14:50:00Z"
  },

  // Beauty & Care (categoryId: 6)
  {
    id: 9,
    name: "كريم مرطب للوجه",
    nameEn: "Face Moisturizing Cream",
    description: "كريم مرطب طبيعي للوجه مناسب لجميع أنواع البشرة",
    price: 199.99,
    originalPrice: 249.99,
    categoryId: 6,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 75,
    rating: 4.5,
    reviewCount: 167,
    brand: "Natural Beauty",
    tags: ["skincare", "moisturizer", "natural"],
    specifications: {
      "الحجم": "50ml",
      "المكونات": "طبيعية 95%",
      "مناسب لـ": "جميع أنواع البشرة",
      "خالي من": "البارابين والكبريتات"
    },
    createdAt: "2024-01-13T13:40:00Z",
    updatedAt: "2024-01-22T10:25:00Z"
  },

  // Toys & Hobbies (categoryId: 7)
  {
    id: 10,
    name: "مكعبات بناء تعليمية",
    nameEn: "Educational Building Blocks",
    description: "مجموعة مكعبات بناء ملونة لتنمية مهارات الأطفال الإبداعية",
    price: 159.99,
    originalPrice: 199.99,
    categoryId: 7,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 60,
    rating: 4.6,
    reviewCount: 124,
    brand: "Kids Creative",
    tags: ["toys", "educational", "building"],
    specifications: {
      "العمر المناسب": "3-8 سنوات",
      "عدد القطع": "100 قطعة",
      "المادة": "بلاستيك آمن",
      "الألوان": "متعددة"
    },
    createdAt: "2024-01-06T15:10:00Z",
    updatedAt: "2024-01-18T17:35:00Z"
  }
];

module.exports = { products };
