<template>
  <div>
    <h2>Cars page</h2>

    <ul>
      <router-link :key="car" tag="li" v-for="car in 5" :to="'/car/' + car">
        <a>Car {{ car }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
