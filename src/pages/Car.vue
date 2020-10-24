<template>
  <div>
    <h2>Car - {{ id }}</h2>
    <button class="btn btn-primary" @click="goBackToCars">Go to cars</button>
    <hr>
    <router-link
      tag="button"
      class="btn btn-success"
      :to="{
      name: 'full',
      params: {id},
      query: {name: ' Mazda ', age: '2020'},
      hash: '#scroll'
    }"
    >Car full
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // id: this.$router.currentRoute.params.id
      id: this.$route.params.id
    }
  },
  methods: {
    goBackToCars () {
      this.$router.push('/cars')
    }
  },
  watch: {
    $route (toR, fromR) {
      this.id = toR.params.id
    }
  },
  beforeRouteLeave (toR, fromR, next) {
    console.log('beforeRouteLeave ')
    if (window.confirm('Are you want to go to Cars page?')) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style scoped>

</style>
