import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    singer: {}
  },
  mutations: {
    slectSinger (state, singer) {
      state.singer = singer
    }
  },
  actions: {

  }
})
