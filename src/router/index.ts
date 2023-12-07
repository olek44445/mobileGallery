import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'





const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tabAdmin'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tabAdmin'
      },
      {
        path: 'tabAdmin',
        component: () => import('@/views/TabAdminPage.vue')
      },
      {
        path: 'tabConsole',
        component: () => import('@/views/TabConsolePage.vue')
      },
      {
        path: 'tabStats',
        component: () => import('@/views/TabStatsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
