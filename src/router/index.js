import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewInvoice from '../views/ViewInvoice.vue'
import PreviousInvoices from '../views/PreviousInvoices.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newinvoice',
    name: 'ViewInvoice',
    component: ViewInvoice
  },
  {
    path: '/previousinvoices',
    name: 'PreviousInvoices',
    component: PreviousInvoices
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
