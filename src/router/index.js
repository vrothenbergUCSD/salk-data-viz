import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue";
import Data from "../views/Data.vue";
import Login from "../views/Login.vue";
//import firebase from "firebase/app";
//import "firebase/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    path: "/data",
    name: "Data",
    component: Data,
    meta: {
      title: "Data",
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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

