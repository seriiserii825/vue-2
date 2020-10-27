import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter += 1
    },
    increase (state, payload) {
      state.counter += payload.value
    }
  },
  actions: {
    increment (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 2000)
    }
  },
  getters: {
    getFullCounter (state) {
      return state.counter * 4
    },
    normalizedCounter (state, getters) {
      const finalCounter = getters.getFullCounter
      if (finalCounter < 0) {
        return 0
      } else if (finalCounter > 100) {
        return 100
      } else {
        return finalCounter
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
