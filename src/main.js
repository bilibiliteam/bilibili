// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Swiper from 'swiper'
import store from './store/'
import '../static/css/swiper.min.css'
import '../static/font/iconfont.css'
import '../static/video-icon/iconfont.css'
import '../static/css/base.css'
import '../static/font/iconfont.js'
import Vuex from 'vuex'
// import './store/index.js'
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: `
    <router-view></router-view>
  `
})
