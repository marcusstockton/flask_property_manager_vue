import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/auth/login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/auth/register.vue"),
  },
  {
    path: "/portfolios",
    name: "Portfolios",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../components/portfolio/dashboard.vue"
      ),
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "portfolio-list" */ "../components/portfolio/portfolio-list.vue"
          ),
      },
      {
        path: "create",
        name: "portfolioCreate",
        component: () =>
          import(
            /* webpackChunkName: "portfolio-create" */ "../components/portfolio/portfolio-form.vue"
          ),
      },
      {
        path: ":portfolioId",
        name: "portfolioDetails",
        component: () =>
          import(
            /* webpackChunkName: "portfolio-detail" */ "../components/portfolio/portfolio-detail.vue"
          ),
      },
      {
        path: ":portfolioId/edit",
        component: () =>
          import(
            /* webpackChunkName: "portfolio-edit" */ "../components/portfolio/portfolio-form.vue"
          ),
      },
      {
        path: ":portfolioId/properties",
        component: () =>
          import(
            /* webpackChunkName: "properties-dashboard" */ "../components/property/dashboard.vue"
          ),
      },
      {
        path: ":portfolioId/properties/create",
        name: "propertyCreate",
        component: () =>
          import(
            /* webpackChunkName: "property-create" */ "../components/property/property-form.vue"
          ),
      },
      {
        path: ":portfolioId/properties/:propertyId",
        name: "propertyDetails",
        component: () =>
          import(
            /* webpackChunkName: "property-detail" */ "../components/property/property-detail.vue"
          ),
      },
      {
        path: ":portfolioId/properties/:propertyId/edit",
        component: () =>
          import(
            /* webpackChunkName: "property-form" */ "../components/property/property-form.vue"
          ),
      },

      {
        path: ":portfolioId/properties/:propertyId/tenants",
        component: () =>
          import(
            /* webpackChunkName: "tenant-dashboard" */ "../components/tenant/dashboard.vue"
          ),
      },
      {
        path: ":portfolioId/properties/:propertyId/tenants/create",
        component: () =>
          import(
            /* webpackChunkName: "tenant-create" */ "../components/tenant/tenant-form.vue"
          ),
      },
      {
        path: ":portfolioId/properties/:propertyId/tenants/:tenantId",
        component: () =>
          import(
            /* webpackChunkName: "tenant-detail" */ "../components/tenant/tenant-detail.vue"
          ),
      },
      {
        path: ":portfolioId/properties/:propertyId/tenants/:tenantId/edit",
        component: () =>
          import(
            /* webpackChunkName: "tenant-edit" */ "../components/tenant/tenant-form.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/register", "/", "/about"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login", "/register");
  }

  next();
});

export default router;
