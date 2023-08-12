import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LottoMain",
    meta: { title: "로또" },
    component: () =>
      import(
        /* webpackChunkName: "lottomain" */ "@/components/lotto/LottoMain.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
