<template>
  <div>
    <button @click="addOne">ChangeCounter</button>
  </div>
</template>

<script>
export default {
  methods: {
    addOne () {
      this.$store.commit('incrementToTen')
    }
  }
}
</script>

<style scoped>

</style>
