# Vue Template Project

Modern ve ölçeklenebilir Vue.js uygulamaları için hazır template projesi.

## Özellikler

- **Vue 3** - Modern Vue framework
- **Pinia** - State management
- **Vue Router** - Multi-route yapısı
- **Layout Bazlı Mimari** - AdminLayout, AuthLayout, UserLayout
- **Modüler Yapı** - Organize edilmiş klasör yapısı

## Proje Yapısı

```
vue-template/
├── public/              # Statik dosyalar
├── src/
│   ├── assets/         # Resim, font vb. kaynaklar
│   ├── components/     # Tekrar kullanılabilir componentler
│   ├── layouts/        # Layout componentleri
│   │   ├── AdminLayout.vue
│   │   ├── AuthLayout.vue
│   │   └── UserLayout.vue
│   ├── router/         # Route tanımlamaları
│   │   ├── routes/
│   │   │   ├── adminRoutes.js
│   │   │   ├── authRoutes.js
│   │   │   └── userRoutes.js
│   │   └── index.js
│   ├── stores/         # Pinia store'ları
│   │   └── auth.js
│   ├── views/          # Sayfa componentleri
│   │   ├── Admin/
│   │   ├── Auth/
│   │   │   ├── Login/
│   │   │   │   └── index.vue
│   │   │   └── Register/
│   │   └── User/
│   │       └── App.vue
│   ├── App.vue         # Ana component
│   ├── main.js         # Uygulama giriş noktası
│   └── style.css       # Global stiller
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js      # Vite konfigürasyonu
```

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production build önizleme
npm run preview
```

## Layout Sistemi

Proje üç ana layout yapısına sahiptir:

### 1. AdminLayout
Yönetim paneli sayfaları için kullanılır. Sidebar, header ve içerik alanı içerir.

### 2. AuthLayout
Giriş, kayıt gibi kimlik doğrulama sayfaları için kullanılır. Minimal tasarım.

### 3. UserLayout
Son kullanıcı sayfaları için kullanılır. Navbar, footer ve içerik alanı içerir.

## Route Yapısı

Her layout için ayrı route dosyaları bulunur:

- `adminRoutes.js` - Admin paneli rotaları
- `authRoutes.js` - Kimlik doğrulama rotaları
- `userRoutes.js` - Kullanıcı sayfası rotaları

### Route Index (router/index.js)

```javascript
import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/router/routes/authRoutes.js";
import adminRoutes from "@/router/routes/adminRoutes";
import userRoutes from "@/router/routes/userRoute.js";

const routes = [...authRoutes, ...adminRoutes, ...userRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Route Guard İşlemleri
  // Örnek: Kimlik doğrulama kontrolü
  // const isAuthenticated = useAuthStore().isAuthenticated;
  // if (to.meta.requiresAuth && !isAuthenticated) {
  //   return next('/auth/login');
  // }
  
  next();
});

export default router;
```

### Route Tanımlama Örneği (authRoutes.js)

```javascript
import AuthLayout from "@/layouts/AuthLayout.vue";

const authRoutes = [
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/Auth/Login/index.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/views/Auth/Register/index.vue"),
      },
    ],
  },
];

export default authRoutes;
```

### Diğer Route Dosyaları İçin Örnekler

**adminRoutes.js:**
```javascript
import AdminLayout from "@/layouts/AdminLayout.vue";

const adminRoutes = [
  {
    path: "/admin",
    component: AdminLayout,
    meta: { requiresAuth: true, role: 'admin' },
    children: [
      {
        path: "dashboard",
        name: "AdminDashboard",
        component: () => import("@/views/Admin/Dashboard/index.vue"),
      },
      {
        path: "users",
        name: "AdminUsers",
        component: () => import("@/views/Admin/Users/index.vue"),
      },
    ],
  },
];

export default adminRoutes;
```

**userRoutes.js:**
```javascript
import UserLayout from "@/layouts/UserLayout.vue";

const userRoutes = [
  {
    path: "/",
    component: UserLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/User/Home/index.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        meta: { requiresAuth: true },
        component: () => import("@/views/User/Profile/index.vue"),
      },
    ],
  },
];

export default userRoutes;
```

## State Management (Pinia)

Pinia ile merkezi state yönetimi yapılır. Store'lar `src/stores/` klasöründe bulunur.

Örnek kullanım:

```javascript
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
```

## Yeni Sayfa Ekleme

1. İlgili layout klasörü altına view oluştur (`views/Admin/`, `views/Auth/`, `views/User/`)
2. Route dosyasına yeni rotayı ekle (`router/routes/`)
3. Gerekirse yeni store oluştur (`stores/`)

## Geliştirme İpuçları

- Her view için ayrı klasör oluşturun ve `index.vue` kullanın
- Tekrar kullanılacak componentleri `components/` klasörüne ekleyin
- Global stilleri `style.css` dosyasında tanımlayın
- Layout-specific stiller ilgili layout component'inde tutun

## Teknolojiler

- Vue 3
- Vite
- Vue Router
- Pinia
- JavaScript

---

**Not:** Bu template proje, hızlı Vue.js uygulama geliştirme için hazırlanmıştır. İhtiyaçlarınıza göre özelleştirilebilir.