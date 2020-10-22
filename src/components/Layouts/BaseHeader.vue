<template>
  <h2 class="base-header">{{ title }}</h2>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.base-header {
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.4rem;
  text-transform: uppercase;
  border-bottom: 1px solid purple;
}
</style>
