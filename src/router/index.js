import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/popup",
    name: "Popup",
    component: () => import("../components/popup/Popup.vue"),
  },
  {
    path: "/apple",
    name: "Apple",
    component: () => import("../components/apple/Apple.vue"),
  },
  {
    path: "/Practice",
    name: "Practice",
    component: () => import("../components/practice/Practice.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
