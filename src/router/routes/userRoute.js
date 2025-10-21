import UserLayout from "@/layouts/UserLayout.vue";

const userRoutes = [
  {
    path: "",
    component: UserLayout,
    children: [
      {
        path: "",
        name: "UserHome",
        component: () => import("@/views/User/Home/index.vue"),
      },
    ],
  },
];
export default userRoutes;
