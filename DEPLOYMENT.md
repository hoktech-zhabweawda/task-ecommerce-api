# 🚀 دليل النشر على Vercel

## 📋 المتطلبات قبل النشر

### ✅ التحقق من الملفات المطلوبة
تأكد من وجود هذه الملفات في مشروعك:
- `package.json` - معلومات المشروع والمكتبات
- `server.js` - الملف الرئيسي للـ API
- `vercel.json` - إعدادات Vercel
- `src/data/` - مجلد البيانات المحلية

### ✅ التحقق من package.json
```json
{
  "name": "ecommerce-api",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "build": "echo 'Build completed'"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "morgan": "^1.10.0"
  }
}
```

## 🌐 طرق النشر على Vercel

### الطريقة الأولى: GitHub Integration (الأسهل)

#### 1. رفع الكود إلى GitHub
```bash
# إنشاء Git repository
git init
git add .
git commit -m "Initial commit: E-commerce API"

# ربط مع GitHub repository
git remote add origin https://github.com/username/ecommerce-api.git
git branch -M main
git push -u origin main
```

#### 2. النشر من Vercel Dashboard
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول أو أنشئ حساب جديد
3. اضغط "New Project"
4. اختر "Import Git Repository"
5. اختر المشروع من GitHub
6. اضغط "Deploy"

### الطريقة الثانية: Vercel CLI

#### 1. تثبيت Vercel CLI
```bash
npm install -g vercel
```

#### 2. تسجيل الدخول
```bash
vercel login
```

#### 3. النشر
```bash
# للنشر في بيئة التطوير
vercel

# للنشر في الإنتاج
vercel --prod
```

### الطريقة الثالثة: رفع مباشر

#### 1. ضغط المشروع
قم بضغط مجلد المشروع في ملف ZIP (تأكد من عدم تضمين `node_modules`)

#### 2. رفع على Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط "New Project"
3. اختر "Browse" ورفع ملف ZIP
4. انتظر حتى يكتمل النشر

## ⚙️ إعدادات Vercel

### ملف vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

### متغيرات البيئة (Environment Variables)
في Vercel Dashboard:
1. اذهب إلى Project Settings
2. اختر Environment Variables
3. أضف:
   - `NODE_ENV` = `production`

## 🔧 استكشاف الأخطاء

### مشاكل شائعة وحلولها

#### 1. خطأ "Module not found"
**السبب**: مسار خاطئ للملفات
**الحل**: تأكد من المسارات النسبية في `server.js`
```javascript
// صحيح
const { categories } = require('./src/data/categories');

// خاطئ
const { categories } = require('/src/data/categories');
```

#### 2. خطأ "Function timeout"
**السبب**: الدالة تستغرق وقتاً طويلاً
**الحل**: قلل من `delay` في الكود أو احذفه للإنتاج
```javascript
// للتطوير
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// للإنتاج
const delay = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
```

#### 3. خطأ CORS
**السبب**: إعدادات CORS
**الحل**: تأكد من إعداد CORS بشكل صحيح
```javascript
app.use(cors({
  origin: '*', // أو حدد النطاقات المسموحة
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## 📊 مراقبة الأداء

### Vercel Analytics
1. في Project Dashboard
2. اذهب إلى Analytics tab
3. راقب:
   - عدد الطلبات
   - زمن الاستجابة
   - معدل الأخطاء

### Function Logs
1. في Project Dashboard
2. اذهب إلى Functions tab
3. اضغط على function للاطلاع على logs

## 🔄 التحديثات التلقائية

### مع GitHub Integration
- كل push إلى main branch سيؤدي إلى نشر تلقائي
- يمكن تعطيل هذا من Project Settings

### مع CLI
```bash
# تحديث النشر
vercel --prod
```

## 🌍 النطاقات المخصصة

### إضافة نطاق مخصص
1. في Project Settings
2. اذهب إلى Domains
3. أضف النطاق المطلوب
4. اتبع تعليمات DNS

## 📝 نصائح للنشر الناجح

### 1. اختبر محلياً أولاً
```bash
npm start
# تأكد من عمل جميع endpoints
```

### 2. تحقق من حجم المشروع
- تجنب ملفات كبيرة غير ضرورية
- احذف `node_modules` قبل الرفع

### 3. استخدم متغيرات البيئة
```javascript
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';
```

### 4. تحسين الأداء
- قلل من `delay` في الإنتاج
- استخدم compression middleware
- فعل caching للبيانات الثابتة

## 🎯 بعد النشر الناجح

### اختبر الـ API
```bash
# استبدل YOUR_DOMAIN بالرابط الفعلي
curl https://your-domain.vercel.app/api/docs
curl https://your-domain.vercel.app/api/categories
curl https://your-domain.vercel.app/api/products
```

### شارك الرابط
- التوثيق: `https://your-domain.vercel.app/api/docs`
- اختبار: `https://your-domain.vercel.app/test-api.html`

---

**ملاحظة**: Vercel يوفر نشر مجاني مع حدود معقولة للمشاريع الشخصية والتعليمية.
