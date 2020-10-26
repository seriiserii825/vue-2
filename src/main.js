import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/routes'
import BaseLink from '@/components/UI/BaseLink'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.component('base-link', BaseLink)

// router.beforeEach((to, from, next) => {
// console.log('global beforeEach')
// console.log(to, from)
// if (to.name === 'team-members') {
//   next()
// } else {
//   next({ name: 'team-members' })
// }
//   next()
// })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
