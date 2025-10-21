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
  // Route Guard Islemleri

  next();
});
export default router;
