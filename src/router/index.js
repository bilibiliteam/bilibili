import Vue from 'vue'
import Router from 'vue-router'
import homeZb from '../page/home-zb'
import channel from '../page/channel-x'
import liveStreaming from '../components/channel/liveStreaming'
import vipshopping from '../page/vipshopping'
import dongtai from '../page/dongtai'
import goodsClass from '../page/vipPage/goodsClass'
import tuijian from '../components/tuijian/tuijian'
import zhibo from '../components/zhibo/zhibo'
import zhuifan from '../components/zhuifan/zhuifan'
import video from '../page/videoPage'
import videoIntro from '../components/video/videxIntro'
import videoComment from '../components/video/videoComment'
//首页第四个子页面
import homePage4 from '../components/homepage4/homepage4'


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
        {
          path: 'zhuifan',
          name: 'zhuifan',
          component: zhuifan
        },
        {
          path: 'homePage4',
          name: 'homePage4',
          component: homePage4
        }
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
    },
    {
      path: '/goodsClass',
      name: 'goodsClass',
      component: goodsClass
    },
    {
      path: '/video',
      name: 'video',
      component: video,
      children:[{
        path: '',
        name: 'videoIntro',
        component: videoIntro
      },{
        path: 'videoIntro',
        name: 'videoIntro',
        component: videoIntro
      },{
        path: 'videoComment',
        name: 'videoComment',
        component: videoComment
      }]
    }
  ]
})
