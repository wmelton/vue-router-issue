import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/log/:logId?',
      name: 'logs',
      component: () => import('../views/LogsView.vue'),
      props: true
    }
  ]
})

export default router
