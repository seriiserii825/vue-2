<template>
  <button @click="$emit('return-props', clickEvent)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['clickEvent']
}
</script>

<style scoped lang="scss">
button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: purple;
  border: 1px solid purple;
  border-radius: 4px;
  transition: all .4s;

  &:hover {
    color: white;
    background-color: purple;
    cursor: pointer;
  }
}
</style>
