<template>
  <ul>
    <li @click="activateRatingControl('poor')" :class="{active: activeRating === 'poor'}">Poor</li>
    <li @click="activateRatingControl('average')" :class="{active: activeRating === 'average'}">Average</li>
    <li @click="activateRatingControl('great')" :class="{active: activeRating === 'great'}">Great</li>
  </ul>
</template>

<script>
export default {
  emits: ['input'],
  data () {
    return {
      activeRating: ''
    }
  },
  methods: {
    activateRatingControl (option) {
      this.activeRating = option
      this.$emit('input', option)
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 4rem;
  padding: 0;
  list-style-type: none;
}

li {
  margin-left: 1rem;
  padding: 1rem 1.5rem;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: all .4s;

  &.active,
  &:hover {
    color: white;
    border-color: purple;
    background-color: purple;
  }
}
</style>
