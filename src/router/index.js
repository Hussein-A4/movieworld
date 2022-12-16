import { createRouter, createWebHistory } from "vue-router";
import homeView from "../views/homeView.vue";
import loginView from "../views/loginView.vue";
import purchaseView from "../views/purchaseView.vue";
import cartView from "../views/cartView.vue";

const routes = [
  {
    path: '/',
    component: homeView
  },
  {
    path: '/login',
    component: loginView
  },
  {
    path: '/purchase',
    component: purchaseView
  },
  {
    path: '/cart',
    component: cartView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;