import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/shipmentSign'
    },
    {
      path: '/lihuo',
      name: 'lihuo',
      component: () => import(/* webpackChunkName: "lihuo" */ '../views/LiHuo.vue')
    },
    {
      path: '/receiptSign',
      name: 'ReceiptSign',
      component: () => import(/* webpackChunkName: "ReceiptSign" */ '../views/ReceiptSign.vue')
    },
    {
      path: '/pick',
      name: 'Pick',
      component: () => import(/* webpackChunkName: "Pick" */ '../views/Pick.vue')
    },
    {
      path: '/shipmentSign',
      name: 'ShipmentSign',
      component: () => import(/* webpackChunkName: "ShipmentSign" */ '../views/ShipmentSign.vue')
    }
  ]
})
