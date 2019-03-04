import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/lihuo'
    },
    {
      path: '/lihuo',
      name: 'lihuo',
      component: () => import(/* webpackChunkName: "lihuo" */ '../views/LiHuo.vue')
    }
  ]
})
