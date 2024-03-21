import { Router, createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [];

export const router: Router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
  strict: true,
  scrollBehavior(_, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveScrollTop) {
          const top: number = document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  },
});
export default router;
