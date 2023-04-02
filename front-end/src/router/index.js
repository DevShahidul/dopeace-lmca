import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from "@/components/AppLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import Settings from "@/views/Settings.vue";
import Students from "@/views/Students.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";
import {useAuthStore} from "@/stores/AuthStore";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: '/',
          name: 'app',
          redirect: '/dashboard',
          component: AppLayout,
          meta: {
              requiresAuth: true,
          },
          children: [
              {
                  path: 'dashboard',
                  name: 'dashboard',
                  component: Dashboard
              },
              {
                  path: 'dashboard',
                  name: 'dashboard',
                  component: Students
              },
              {
                  path: 'settings',
                  name: 'settings',
                  component: Settings
              }
          ]
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      },
      {
          path: '/:pathMatch(.*)',
          name: 'notfound',
          component: NotFound
      }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

const authStore = useAuthStore()

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !authStore.user.token){
        next({name: 'login'})
    }else if(to.meta.requiresGuest && authStore.user.token){
        next({name: 'dashboard'})
    }else{
        next();
    }
})

export default router
