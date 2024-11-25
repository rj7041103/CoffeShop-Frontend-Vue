import { createRouter, createWebHistory } from 'vue-router'
//import HomeIndex from '@/presentation/HomePage/HomeIndex.vue'
/* import App from '@/App.vue' */
import HomeIndex from '@/presentation/HomePage/HomeIndex.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeIndex,
    },
    /* {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue'),
    }, */
  ],
})

export default router
