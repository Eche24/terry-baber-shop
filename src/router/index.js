import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
// import Home from "../views/Home.vue";
// import Contact from "../components/Contact.vue";
// import Services from "../components/Services.vue";
// import About from "../components/About.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  routes: [
    // {
    //   path: "/",
    //   name: "Home",
    //   component: Home
    // },
    // {
    //   path: "/contact",
    //   name: "contact",
    //   component: Contact
    // },
    // {
    //   path: "/services",
    //   name: "services",
    //   component: Services
    // },
    // {
    //   path: "/about",
    //   name: "About",
    //   component: About
    // }
  ]
});

// const routes = [

// ];

// const router = new VueRouter({
 
// });

// export default router;
