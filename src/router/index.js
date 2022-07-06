import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataView from "../views/DataView.vue";
//import firebase from "firebase/app";
//import "firebase/auth";

Vue.use(VueRouter);

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Panda Data Viz`;
  next();
});

/*
router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        }
        return next({ name: "Home" });
      }
      return next();
    }
    return next({ name: "Home" });
  }
  return next();
});
*/

export default router;
