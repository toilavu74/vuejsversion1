import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/backend/Login.vue'
import Dashboard from '@/views/backend/Dashboard.vue'

import Layout from '@/components/backend/Layout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard.index',
      component: Dashboard,
    }
  ]
})

export default router
