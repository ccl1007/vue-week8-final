import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/' },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../views/GuideView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
