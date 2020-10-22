<template>
  <div class="base-card">
    <base-header :title="title"></base-header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.base-card {
  margin: 3rem auto 6rem;
  max-width: 600px;
  padding: 2rem;
  border-radius: .8rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, .4);
}
label {
  margin-bottom: .4rem;
  font-weight: bold;
  color: purple;
}
</style>
