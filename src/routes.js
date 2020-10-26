import VueRouter from 'vue-router'
import TeamsList from '@/components/teams/TeamsList'
import UsersList from '@/components/users/UsersList'
import TeamMembers from '@/components/teams/TeamMembers'

export default new VueRouter(
  {
    routes: [
      {
        path: '/',
        redirect: '/teams'
      },
      {
        path: '/users',
        component: UsersList
      },
      {
        name: 'teams',
        path: '/teams',
        component: TeamsList,
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true
          }
        ]
        // alias: '/'
      },
      {
        path: '/teams/:teamId',
        component: TeamMembers,
        props: true
      },
      {
        path: '/:notFound(.*)'
      }
    ],
    mode: 'history'
  }
)
