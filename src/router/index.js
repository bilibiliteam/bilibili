import Vue from 'vue'
import Router from 'vue-router'
import homeZb from '../page/home-zb'
import channel from '../page/channel-x'
import liveStreaming from '../components/channel/liveStreaming'
import vipshopping from '../page/vipshopping'
import dongtai from '../page/dongtai'
//liveStreamingRouter
import recommend from '../components/channel/liveStreamingRouter/recommend'
import completionAnimation from '../components/channel/liveStreamingRouter/completionAnimation'
import playerRoom from '../components/channel/liveStreamingRouter/playerRoom'
import zhiboRecommend from '@/components/channel/channelAllRouter/zhiboRecommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeZb',
      component: homeZb
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/channel/liveStreaming',
      name: 'liveStreaming',
      component: liveStreaming,
      children: [
        {
          path: '/channel/liveStreaming/zhiboRecommend',
          name: 'zhiboRecommend',
          component: zhiboRecommend
        },
        {
          path: '/channel/liveStreaming/recommend',
          name: 'recommend',
          component: recommend
        },
        {
          path: '/channel/liveStreaming/completionAnimation',
          name: 'completionAnimation',
          component: completionAnimation
        },
        {
          path: '/channel/liveStreaming/playerRoom',
          name: 'playerRoom',
          component: playerRoom
        }
      ]
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
