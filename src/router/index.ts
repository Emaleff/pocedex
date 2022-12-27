import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TheMain from "@/views/TheMain.vue";
import PocemonPage from "@/views/PocemonPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "main", component: TheMain },
  {
    path: "/:id",
    name: "pocemonPage",
    component: PocemonPage,
    props: true,
    beforeEnter(to, from, next) {
      if (to.params.id && +(to.params.id as string) > 0 && +(to.params.id as string) < 905) {
        next()
      } else {
        router.push('/notFound')
      }

    }
  },

  { path: "/notFound", name: "notFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
