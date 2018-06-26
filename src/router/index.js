import Vue from 'vue'
import Router from 'vue-router'

import homeZb from '../page/home-zb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeZb',
      component: homeZb
    }
  ]
})
