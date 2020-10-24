<template>
  <a class="link" @click="$emit('click')">
    <slot></slot>
  </a>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.link {
  font: inherit;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  text-decoration: none;
  transition: all .3s ease-in;
  background-color: #11005c;

  &.router-link-active,
  &:hover,
  &:active {
    color: #f1a80a;
    border-color: #f1a80a;
    background-color: #1a037e;
  }
}
</style>
