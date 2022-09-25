import { createRouter, createWebHistory } from "vue-router";
import TheMain from "@/views/TheMain";
import PocemonPage from "@/views/PocemonPage";
import NotFound from "@/views/NotFound";

const routes = [
  { path: "/", name: "main", component: TheMain },
  {
    path: "/:id",
    name: "pocemonPage",
    component: PocemonPage,
    props: true,
    beforeEnter: (to, from, next) => {
      if (parseInt(to.params.id) && to.params.id > 0 && to.params.id <= 904) {
        next();
      } else {
        next("/notFound");
      }
    },
  },

  { path: "/notFound", name: "notFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
