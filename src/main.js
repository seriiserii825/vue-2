import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TeamsList from '@/components/teams/TeamsList'
import UsersList from '@/components/users/UsersList'

Vue.config.productionTip = false

const routes = [
  {
    path: '/teams',
    component: TeamsList
  },
  {
    path: '/users',
    component: UsersList
  }
]

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
