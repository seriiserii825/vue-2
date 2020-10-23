import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = VueRouter({
  mode: 'history',
  routes: []
})

new Vue({
  render: h => h(App)
}).$mount('#app')
