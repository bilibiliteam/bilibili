import Vue from 'vue'
import Router from 'vue-router'

import homeZb from '../page/home-zb'
import vipshopping from '../page/vipshopping'
import dongtai from '../page/dongtai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeZb',
      component: homeZb
    }
    ,{
      path: '/vipshopping',
      name: 'vipshopping',
      component: vipshopping
    },{
      path: '/dongtai',
      name: 'dongtai',
      component: dongtai
    }
  ]
})
