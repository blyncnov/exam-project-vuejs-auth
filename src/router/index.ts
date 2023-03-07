import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Authentication Components
// import LoginView from '../views/LoginView.vue'
// import RegisterView from '../views/RegisterView.vue'
import ErrorPageView from '../views/ErrorPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/sign-in',
      name: 'sign-in',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/auth/sign-up',
      name: 'sign-up',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/*',
      name: '404',
      component: ErrorPageView
    }
  ]
})

export default router
