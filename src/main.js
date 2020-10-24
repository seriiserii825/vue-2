import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/routes'
import BaseLink from '@/components/UI/BaseLink'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.component('base-link', BaseLink)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
