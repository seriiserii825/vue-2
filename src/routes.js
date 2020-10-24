import VueRouter from 'vue-router'
import TeamsList from '@/components/teams/TeamsList'
import UsersList from '@/components/users/UsersList'
import TeamMembers from '@/components/teams/TeamMembers'

export default new VueRouter(
  {
    routes: [
      {
        path: '/users',
        component: UsersList
      },
      {
        path: '/teams',
        component: TeamsList
      },
      {
        path: '/teams/:teamId',
        component: TeamMembers
      }
    ],
    mode: 'history'
  }
)
