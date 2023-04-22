import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainBoardPage from '@/Pages/MainBoardPage.vue';
import DefaultMainLayout from '@/layouts/DefaultMainLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: DefaultMainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: MainBoardPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
