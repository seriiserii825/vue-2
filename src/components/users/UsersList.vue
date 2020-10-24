<template>
  <div>
    <div class="go-to-teams">
      <base-link @click="goToTeams">Go to team</base-link>
    </div>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue'

export default {
  components: {
    UserItem
  },
  methods: {
    goToTeams () {
      this.$router.push('/teams')
    }
  },
  inject: ['users']
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}

.go-to-teams {
  margin-top: 3rem;
  text-align: center;

  button {
    display: inline-block;
  }
}
</style>
