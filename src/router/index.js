import Vue from 'vue'
import Router from 'vue-router'
import homeZb from '../page/home-zb'
import channel from '../page/channel-x'
import liveStreaming from '../components/channel/liveStreaming'
import vipshopping from '../page/vipshopping'
import dongtai from '../page/dongtai'
import tuijian from '../components/tuijian/tuijian'
import zhibo from '../components/zhibo/zhibo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeZb',
      component: homeZb,
      children: [
        {
          path: '',
          name: 'zhibo',
          component: zhibo
        },
        {
          path: 'zhibo',
          name: 'zhibo',
          component: zhibo
        },
        {
          path: 'tuijian',
          name: 'tuijian',
          component: tuijian
        },
      ]
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/channel/liveStreaming',
      name: 'liveStreaming',
      component: liveStreaming
    },
    {
      path: '/vipshopping',
      name: 'vipshopping',
      component: vipshopping
    },
    {
      path: '/dongtai',
      name: 'dongtai',
      component: dongtai
    }
  ]
})
