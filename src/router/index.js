import Vue from 'vue'
import Router from 'vue-router'
import xIndex from '@/components/xIndex/xIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: xIndex
    }
  ]
})
