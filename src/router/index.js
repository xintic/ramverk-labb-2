import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShlView from '@/views/ShlView.vue'
import HaView from '@/views/HaView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/shl',
      name: 'shl',
      component: ShlView,
    },
    {
      path: '/hockeyallsvenskan',
      name: 'hockeyallsvenskan',
      component: HaView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
