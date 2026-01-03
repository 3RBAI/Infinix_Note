# API Documentation - Infinix Bootloader Guide
## توثيق API للمساعد الذكي

---

## 📋 نظرة عامة على API

هذا الملف يوثق جميع نقاط النهاية (Endpoints) المتاحة في تطبيق Infinix Bootloader Guide. يتم استخدام هذه الـ APIs للتواصل بين الواجهة الأمامية والخادم الخلفي.

### معلومات الخادم:
- **Base URL**: `https://infinix-bl-czsmtrim.manus.space/api`
- **Protocol**: HTTPS
- **Content-Type**: application/json
- **Authentication**: JWT Token (في الرؤوس)

---

## 🔐 المصادقة والأمان

### رؤوس الطلب المطلوبة:

```http
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
X-API-Version: 1.0
```

### أكواد الحالة:
| الكود | المعنى |
|------|-------|
| 200 | نجح الطلب |
| 201 | تم الإنشاء بنجاح |
| 400 | طلب غير صحيح |
| 401 | غير مصرح (بحاجة لتسجيل دخول) |
| 403 | ممنوع الوصول |
| 404 | لم يتم العثور على المورد |
| 500 | خطأ في الخادم |

---

## 🤖 نقاط نهاية المساعد الذكي

### 1. الحصول على إجابة من المساعد

**الطلب**:
```http
POST /api/trpc/assistant.query
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

{
  "question": "كيف أفعّل خيارات المطورين؟",
  "context": "bootloader_unlock"
}
```

**الاستجابة**:
```json
{
  "success": true,
  "answer": "لتفعيل خيارات المطورين، اتبع الخطوات التالية...",
  "sources": [
    {
      "title": "Enable Developer Options",
      "url": "https://github.com/3RBAI/Infinix_Note#step-1"
    }
  ],
  "confidence": 0.95
}
```

### 2. الحصول على خطوات مفصلة

**الطلب**:
```http
GET /api/trpc/steps.getAll
Authorization: Bearer <JWT_TOKEN>
```

**الاستجابة**:
```json
{
  "success": true,
  "steps": [
    {
      "id": 1,
      "title": "Enable Developer Options",
      "description": "Access hidden developer settings",
      "details": [
        "Go to Settings → About Phone",
        "Scroll down and find 'Build Number'",
        "Tap on Build Number 7 times rapidly"
      ],
      "duration": "5 minutes",
      "difficulty": "easy"
    },
    {
      "id": 2,
      "title": "Enable USB Debugging & OEM Unlock",
      "description": "Enable debugging and OEM unlock options",
      "details": [...],
      "duration": "3 minutes",
      "difficulty": "easy"
    }
  ]
}
```

### 3. الحصول على التحذيرات

**الطلب**:
```http
GET /api/trpc/warnings.getAll
Authorization: Bearer <JWT_TOKEN>
```

**الاستجابة**:
```json
{
  "success": true,
  "warnings": [
    {
      "id": 1,
      "title": "Data Loss",
      "severity": "critical",
      "description": "Unlocking the bootloader will perform a factory reset...",
      "icon": "shield"
    },
    {
      "id": 2,
      "title": "Warranty Void",
      "severity": "critical",
      "description": "This process may void your device warranty...",
      "icon": "alert-circle"
    }
  ]
}
```

### 4. البحث عن محتوى

**الطلب**:
```http
GET /api/trpc/search.query?q=fastboot&type=steps
Authorization: Bearer <JWT_TOKEN>
```

**الاستجابة**:
```json
{
  "success": true,
  "results": [
    {
      "type": "step",
      "id": 3,
      "title": "Connect to Computer & Enter Fastboot",
      "excerpt": "Prepare your device for bootloader unlock...",
      "relevance": 0.98
    }
  ],
  "totalResults": 5
}
```

---

## 👤 نقاط نهاية المستخدم

### 1. تسجيل الدخول

**الطلب**:
```http
POST /api/trpc/auth.login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**الاستجابة**:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "user"
  }
}
```

### 2. تسجيل الخروج

**الطلب**:
```http
POST /api/trpc/auth.logout
Authorization: Bearer <JWT_TOKEN>
```

**الاستجابة**:
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### 3. الحصول على معلومات المستخدم الحالي

**الطلب**:
```http
GET /api/trpc/auth.me
Authorization: Bearer <JWT_TOKEN>
```

**الاستجابة**:
```json
{
  "success": true,
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "user",
    "createdAt": "2026-01-01T10:00:00Z"
  }
}
```

---

## 📝 نقاط نهاية الملاحظات والتعليقات

### 1. إنشاء ملاحظة

**الطلب**:
```http
POST /api/trpc/notes.create
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

{
  "title": "My Bootloader Unlock Notes",
  "content": "Step 1: Enable developer options...",
  "stepId": 1
}
```

**الاستجابة**:
```json
{
  "success": true,
  "note": {
    "id": "note_456",
    "title": "My Bootloader Unlock Notes",
    "content": "Step 1: Enable developer options...",
    "stepId": 1,
    "createdAt": "2026-01-04T15:30:00Z"
  }
}
```

### 2. الحصول على الملاحظات

**الطلب**:
```http
GET /api/trpc/notes.getByUser
Authorization: Bearer <JWT_TOKEN>
```

**الاستجابة**:
```json
{
  "success": true,
  "notes": [
    {
      "id": "note_456",
      "title": "My Bootloader Unlock Notes",
      "content": "Step 1: Enable developer options...",
      "stepId": 1,
      "createdAt": "2026-01-04T15:30:00Z"
    }
  ]
}
```

### 3. حذف ملاحظة

**الطلب**:
```http
DELETE /api/trpc/notes.delete
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

{
  "noteId": "note_456"
}
```

**الاستجابة**:
```json
{
  "success": true,
  "message": "Note deleted successfully"
}
```

---

## 📊 نقاط نهاية الإحصائيات

### 1. الحصول على إحصائيات الاستخدام

**الطلب**:
```http
GET /api/trpc/analytics.usage
Authorization: Bearer <JWT_TOKEN>
```

**الاستجابة**:
```json
{
  "success": true,
  "stats": {
    "totalVisits": 15420,
    "totalUsers": 3250,
    "averageSessionDuration": 450,
    "topSteps": [
      {
        "stepId": 1,
        "title": "Enable Developer Options",
        "views": 5200
      }
    ]
  }
}
```

---

## 🔧 نقاط نهاية المسؤول

### 1. إنشاء خطوة جديدة (Admin فقط)

**الطلب**:
```http
POST /api/trpc/admin.steps.create
Content-Type: application/json
Authorization: Bearer <ADMIN_JWT_TOKEN>

{
  "title": "New Step",
  "description": "Description of the step",
  "details": ["Detail 1", "Detail 2"],
  "duration": "10 minutes",
  "difficulty": "medium"
}
```

**الاستجابة**:
```json
{
  "success": true,
  "step": {
    "id": 6,
    "title": "New Step",
    "description": "Description of the step",
    "details": ["Detail 1", "Detail 2"],
    "duration": "10 minutes",
    "difficulty": "medium",
    "createdAt": "2026-01-04T15:30:00Z"
  }
}
```

### 2. تحديث خطوة (Admin فقط)

**الطلب**:
```http
PUT /api/trpc/admin.steps.update
Content-Type: application/json
Authorization: Bearer <ADMIN_JWT_TOKEN>

{
  "stepId": 1,
  "title": "Updated Title",
  "description": "Updated description"
}
```

**الاستجابة**:
```json
{
  "success": true,
  "step": {
    "id": 1,
    "title": "Updated Title",
    "description": "Updated description",
    "updatedAt": "2026-01-04T15:35:00Z"
  }
}
```

---

## 🚀 أمثلة الاستخدام

### مثال 1: استخدام JavaScript/TypeScript

```typescript
// استيراد المكتبات
import axios from 'axios';

// إنشاء عميل API
const apiClient = axios.create({
  baseURL: 'https://infinix-bl-czsmtrim.manus.space/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// إضافة التوكن إلى الطلبات
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// الحصول على الخطوات
async function getSteps() {
  try {
    const response = await apiClient.get('/trpc/steps.getAll');
    console.log('Steps:', response.data.steps);
  } catch (error) {
    console.error('Error:', error);
  }
}

// البحث عن محتوى
async function searchContent(query: string) {
  try {
    const response = await apiClient.get('/trpc/search.query', {
      params: { q: query }
    });
    console.log('Results:', response.data.results);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### مثال 2: استخدام Python

```python
import requests
import json

# إعداد العميل
BASE_URL = 'https://infinix-bl-czsmtrim.manus.space/api'
TOKEN = 'your_jwt_token_here'

headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {TOKEN}'
}

# الحصول على التحذيرات
def get_warnings():
    response = requests.get(
        f'{BASE_URL}/trpc/warnings.getAll',
        headers=headers
    )
    return response.json()

# إرسال سؤال للمساعد الذكي
def ask_assistant(question, context='bootloader_unlock'):
    payload = {
        'question': question,
        'context': context
    }
    response = requests.post(
        f'{BASE_URL}/trpc/assistant.query',
        headers=headers,
        json=payload
    )
    return response.json()

# استخدام الدوال
warnings = get_warnings()
print(f"Total warnings: {len(warnings['warnings'])}")

answer = ask_assistant("كيف أفعّل خيارات المطورين؟")
print(f"Answer: {answer['answer']}")
```

---

## 📈 حدود الطلبات (Rate Limiting)

| المستخدم | الحد الأقصى للطلبات | الفترة الزمنية |
|---------|------------------|--------------|
| مستخدم عادي | 100 | ساعة واحدة |
| مستخدم مميز | 500 | ساعة واحدة |
| Admin | بدون حد | - |

---

## 🔄 الإصدارات والتوافق

### الإصدار الحالي: 1.0.0

**التغييرات**:
- ✅ إطلاق الـ API الأولي
- ✅ دعم المصادقة بـ JWT
- ✅ نقاط نهاية المستخدم الأساسية
- ✅ نقاط نهاية المسؤول

### الإصدارات المستقبلية:
- 🔄 دعم GraphQL
- 🔄 WebSocket للتحديثات الفورية
- 🔄 نقاط نهاية متقدمة للتحليلات

---

## 🐛 استكشاف أخطاء API

### خطأ: "Invalid token"
**السبب**: التوكن منتهي الصلاحية أو غير صحيح
**الحل**: قم بتسجيل الدخول مرة أخرى للحصول على توكن جديد

### خطأ: "Rate limit exceeded"
**السبب**: تجاوزت حد الطلبات المسموح
**الحل**: انتظر ساعة واحدة قبل محاولة مرة أخرى

### خطأ: "Server error"
**السبب**: خطأ في الخادم
**الحل**: أعد المحاولة بعد عدة ثوان

---

## 📞 الدعم والمساعدة

للمساعدة في استخدام API:
- **GitHub Issues**: [Issues](https://github.com/3RBAI/Infinix_Note/issues)
- **البريد الإلكتروني**: wolfonlyoman@gmail.com
- **Telegram**: [@a3b6iii](https://t.me/a3b6iii)

---

**آخر تحديث**: 2026-01-04
**الإصدار**: 1.0.0
