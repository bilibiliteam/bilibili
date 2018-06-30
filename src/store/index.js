import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    left: '-100%',
    currentIndex: 0,
    changeChannelName: '番剧',
    changeChannelItem: ['推荐', '连载动画', '完结动画', '资讯', '官方延伸'],
    changeChannelSearchKeyword: [
      'PV',
      'CM',
      '新番介绍',
      '预告片',
      '日本动画',
      '剧场版',
      '预告',
      '新番',
      'F宅字幕组',
      'Fate',
      'TV动画',
      '1080P',
      '4月',
      '下集预告',
      '热血',
      '2018',
      '1月',
      '名侦探柯南',
      '精灵宝可梦',
      '自由之翼',
      'Fate/stay night',
      'DARLING in the FRANX'],
    changeRankItem: ['默认排序', '最新视频', '播放最多', '评论最多', '弹幕最多', '收藏最多'],
    changeChannelAnimationItem: []
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
