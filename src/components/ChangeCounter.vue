<template>
  <div>
    <button @click="addOne">ChangeCounter</button>
  </div>
</template>

<script>
export default {
  methods: {
    addOne () {
      this.$store.commit('increase', { value: 10 })
    }
  }
}
</script>

<style scoped>

</style>
