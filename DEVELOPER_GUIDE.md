# 👨‍💻 دليل المطور - E-commerce API Test

## 🎯 الهدف من المشروع

هذا المشروع مصمم لاختبار مهارات مطوري الواجهات الأمامية (Frontend Developers) في:
- التعامل مع APIs
- إدارة الحالة (State Management)
- بناء واجهات مستخدم تفاعلية
- تطبيق أفضل الممارسات في React

## 📋 مهام الاختبار المقترحة

### المستوى الأساسي (Junior)

#### 1. عرض البيانات الأساسية
- [ ] عرض قائمة المنتجات في شبكة (Grid)
- [ ] عرض تفاصيل المنتج (الاسم، السعر، الصورة)
- [ ] عرض قائمة الفئات
- [ ] إضافة مؤشر التحميل (Loading Spinner)

#### 2. التفاعل الأساسي
- [ ] إضافة شريط بحث يعمل
- [ ] فلترة المنتجات حسب الفئة
- [ ] ترتيب المنتجات حسب السعر
- [ ] عرض رسائل الخطأ

#### 3. التصميم المتجاوب
- [ ] تصميم يعمل على الهاتف والحاسوب
- [ ] استخدام CSS Grid أو Flexbox
- [ ] إضافة تأثيرات بصرية بسيطة

### المستوى المتوسط (Mid-level)

#### 1. إدارة الحالة المتقدمة
- [ ] استخدام useReducer لإدارة الفلاتر
- [ ] تطبيق Context API لمشاركة البيانات
- [ ] إدارة حالة التحميل والأخطاء بشكل مركزي

#### 2. ميزات متقدمة
- [ ] نظام ترقيم الصفحات (Pagination)
- [ ] فلترة متعددة (السعر + الفئة + البحث)
- [ ] حفظ الفلاتر في URL (Query Parameters)
- [ ] نظام المفضلة مع localStorage

#### 3. تحسين الأداء
- [ ] تطبيق debouncing للبحث
- [ ] Lazy loading للصور
- [ ] Memoization للمكونات الثقيلة
- [ ] Virtual scrolling للقوائم الطويلة

#### 4. اختبارات الوحدة
- [ ] كتابة اختبارات للمكونات
- [ ] اختبار وظائف API
- [ ] اختبار التفاعلات

### المستوى المتقدم (Senior)

#### 1. معمارية متقدمة
- [ ] تطبيق نمط Repository Pattern
- [ ] إنشاء Custom Hooks قابلة لإعادة الاستخدام
- [ ] تطبيق Error Boundaries
- [ ] إدارة الحالة باستخدام Zustand أو Redux Toolkit

#### 2. ميزات معقدة
- [ ] نظام سلة التسوق الكامل
- [ ] نظام المراجعات والتقييمات
- [ ] مقارنة المنتجات
- [ ] نظام التوصيات

#### 3. تحسينات الأداء المتقدمة
- [ ] Code splitting وLazy loading للمكونات
- [ ] Service Worker للتخزين المؤقت
- [ ] تحسين Bundle size
- [ ] تطبيق PWA features

#### 4. إمكانية الوصول والجودة
- [ ] تطبيق معايير WCAG للإمكانية
- [ ] دعم لوحة المفاتيح الكامل
- [ ] Screen reader support
- [ ] تحسين SEO

## 🛠️ أدوات التطوير المقترحة

### الأساسية
- React DevTools
- Browser DevTools
- VS Code Extensions (ES7+ React snippets, Prettier)

### المتقدمة
- React Testing Library
- Jest
- Storybook
- Bundle Analyzer
- Lighthouse

## 📊 معايير التقييم

### الكود (40%)
- **نظافة الكود**: تسمية واضحة، تنظيم جيد
- **أفضل الممارسات**: استخدام Hooks بشكل صحيح
- **إعادة الاستخدام**: مكونات قابلة لإعادة الاستخدام
- **معالجة الأخطاء**: التعامل مع الحالات الاستثنائية

### الوظائف (30%)
- **اكتمال الميزات**: تنفيذ جميع المتطلبات
- **صحة العمل**: عدم وجود أخطاء
- **تجربة المستخدم**: سهولة الاستخدام
- **الأداء**: سرعة الاستجابة

### التصميم (20%)
- **التصميم المتجاوب**: يعمل على جميع الأجهزة
- **الجماليات**: تصميم جذاب ومتناسق
- **إمكانية الوصول**: دعم المستخدمين ذوي الاحتياجات الخاصة

### الاختبارات (10%)
- **تغطية الاختبارات**: نسبة الكود المختبر
- **جودة الاختبارات**: اختبارات ذات معنى
- **أنواع الاختبارات**: Unit, Integration, E2E

## 🚀 خطوات البدء

### 1. إعداد البيئة
```bash
# استنساخ المشروع
git clone [repository-url]
cd ecommerce-react-api

# تثبيت المكتبات
npm install

# تشغيل المشروع
npm run dev
```

### 2. فهم البنية
- استكشف ملف `src/services/api.js` لفهم API
- راجع `src/data/` للاطلاع على البيانات
- افحص المكونات الموجودة في `src/components/`

### 3. اختبار API
- افتح `test-api.html` في المتصفح
- جرب جميع وظائف API
- تأكد من فهم بنية البيانات

### 4. بدء التطوير
- ابدأ بالمهام الأساسية
- اختبر كل ميزة قبل الانتقال للتالية
- استخدم Git للتحكم في الإصدارات

## 💡 نصائح للنجاح

### للمبتدئين
1. **ابدأ بسيط**: لا تحاول تنفيذ كل شيء مرة واحدة
2. **استخدم Console.log**: لفهم تدفق البيانات
3. **اقرأ الأخطاء**: رسائل الخطأ تحتوي على معلومات مفيدة
4. **استخدم المراجع**: React docs, MDN, Stack Overflow

### للمتوسطين
1. **فكر في الأداء**: تجنب re-renders غير الضرورية
2. **اكتب كود قابل للقراءة**: التعليقات والتسمية الواضحة
3. **اختبر باستمرار**: لا تتراكم الأخطاء
4. **استخدم TypeScript**: للحصول على type safety

### للمتقدمين
1. **فكر في المعمارية**: كيف سيتوسع المشروع؟
2. **اهتم بالتفاصيل**: UX, Performance, Accessibility
3. **اكتب اختبارات شاملة**: تغطي جميع الحالات
4. **وثق الكود**: للمطورين الآخرين

## 🔍 أمثلة للتنفيذ

### مثال: Hook مخصص للبحث
```javascript
import { useState, useEffect } from 'react';
import { productsAPI } from '../services/api';

export const useProductSearch = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await productsAPI.search(query);
        if (response.success) {
          setResults(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('خطأ في البحث');
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(searchProducts, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return { query, setQuery, results, loading, error };
};
```

### مثال: Context للسلة
```javascript
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // منطق إضافة المنتج
      break;
    case 'REMOVE_ITEM':
      // منطق حذف المنتج
      break;
    case 'UPDATE_QUANTITY':
      // منطق تحديث الكمية
      break;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
```

## 📝 تسليم المشروع

### المطلوب
1. **الكود المصدري**: مع تعليقات واضحة
2. **README**: شرح كيفية تشغيل المشروع
3. **Demo**: رابط للمشروع المنشور (Netlify, Vercel)
4. **اختبارات**: إن وجدت

### التقييم النهائي
- **الوظائف الأساسية**: هل تعمل جميع الميزات؟
- **جودة الكود**: هل الكود نظيف ومنظم؟
- **تجربة المستخدم**: هل التطبيق سهل الاستخدام؟
- **الإبداع**: هل أضاف المطور ميزات إضافية؟

---

**ملاحظة**: هذا المشروع مصمم للتعلم والاختبار. لا تتردد في طرح الأسئلة أو طلب المساعدة!
