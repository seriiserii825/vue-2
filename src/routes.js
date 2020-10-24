import VueRouter from 'vue-router'
import TeamsList from '@/components/teams/TeamsList'
import UsersList from '@/components/users/UsersList'

export default new VueRouter(
  {
    routes: [
      {
        path: '/teams',
        component: TeamsList
      },
      {
        path: '/users',
        component: UsersList
      }
    ],
    mode: 'history'
  }
)
