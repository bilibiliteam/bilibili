import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    count: 0,
    left: '-100%',
    idxLight:0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})