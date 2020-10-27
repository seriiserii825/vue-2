<template>
  <div>
    <button @click="addOne">ChangeCounter</button>
  </div>
</template>

<script>
export default {
  methods: {
    addOne () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<style scoped>

</style>
