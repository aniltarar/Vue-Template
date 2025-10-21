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
