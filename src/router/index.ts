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
  {
    path: "/rsp",
    name: "RspMain",
    meta: { title: "가위바위보" },
    component: () =>
      import(/* webpackChunkName: "rspmain" */ "@/components/rsp/RspMain.vue"),
  },
  {
    path: "/job",
    name: "JobMain",
    meta: { title: "JobList" },
    component: () =>
      import(/* webpackChunkName: "jobmain" */ "@/components/job/JobMain.vue"),
  },
  {
    path: "/board",
    name: "BoardMain",
    meta: { title: "게시판" },
    component: () =>
      import(
        /* webpackChunkName: "boardmain" */ "@/components/board/BoardMain.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
