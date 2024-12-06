import { createRouter, createWebHistory } from 'vue-router'
//import HomeIndex from '@/presentation/HomePage/HomeIndex.vue'
/* import App from '@/App.vue' */
import HomeIndex from '@/presentation/HomePage/HomeIndex.vue'
import MainDashBoard from '@/presentation/DashboardPage/MainDashBoard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: MainDashBoard,
    },
    {
      path: '/',
      name: 'home',
      component: HomeIndex,
    },
  ],
})

export default router
