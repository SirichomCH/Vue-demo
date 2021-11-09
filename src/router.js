import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            redirect: '/profile',
            component: () => import('@/components/layout/Layout'),
            children: [
              {
                path: "/",
                name: "profile",
                component: () => import("@/views/pages/Profile.vue"),
              },
                {
                    path: "/profile",
                    name: "profile",
                    component: () => import("@/views/pages/Profile.vue"),
                  },
                  {
                      path: "/gallery",
                      name: "gallery",
                      component: () => import("@/views/pages/Gallery.vue"),
                    },
                    {
                      path: "*",
                      name: "notfound",
                      meta: {layout: 'blank'},
                      component: () => import("@/views/pages/404.vue"),
                    },
                ]
            }
  ],
});

