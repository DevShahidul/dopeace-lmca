import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import {useAuthStore} from "@/stores";
import AppLayout from "@/components/AppLayout.vue";
import Students from "@/views/Students.vue";
import Settings from "@/views/Settings.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app',
            redirect: '/dashboard',
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
                    path: 'student',
                    name: 'student',
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
    ]
})

// const authStore = useAuthStore();
// const authToken = authStore.getAuthToken();
// router.beforeEach((to, from, next) => {
//     if(to.meta.requiresAuth && !authToken){
//         next({name: 'login'})
//     }else if(to.meta.requiresGuest && authToken){
//         next({name: 'dashboard'})
//     }else{
//         next();
//     }
// })

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'app',
//       redirect: '/dashboard'
//     },
//     {
//       path: '/dashboard',
//       name: 'dashboard',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: Dashboard
//     }
//   ]
// })

export default router
