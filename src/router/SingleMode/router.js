import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/components/Layout'
export const constantRoutes = [{
  path: '/',
  name: 'Layout',
  component: Layout,
  // redirect: 'home',
  children: [
    {
      path: '/home',
      name: 'home',
      metaname: 'homepage',
      component: () => import('@/views/Index') 
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/components/HelloWorld')
    }
  ]
}]

const createRouter = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()
export default router
