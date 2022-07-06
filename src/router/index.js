import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/HomeView.vue";
import DataView from "../views/DataView.vue";
import LoginView from "../views/LoginView.vue";
//import firebase from "firebase/app";
//import "firebase/auth";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    path: "/data",
    name: "DataView",
    component: DataView,
    meta: {
      title: "Data",
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
];


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory('/'),
  routes, // short for `routes: routes`
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Panda Data Viz`;
  next();
});

export {
  router,
}

