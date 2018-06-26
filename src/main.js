// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Swiper from 'swiper'
import '../static/css/swiper.min.css'
import '../static/font/iconfont.css'
import '../static/css/base.css'
import '../static/font/iconfont.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `
    <router-view></router-view>
  `
})
