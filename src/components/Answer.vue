<template>
  <div class="answer">
    <button @click="loadData">Load submited experience</button>
    <ul v-if="!isEmptyData">
      <li :key="item.id" v-for="item in experiences">
        <strong>{{ item.name }}</strong>{{ item.defaultString }}<em>{{ item.experienceLevel }}</em>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['experiences'],
  data () {
    return {
      isEmptyData: true
    }
  },
  methods: {
    loadData () {
      if (this.experiences.length !== 0) {
        this.isEmptyData = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  margin: 3rem 0 0;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

strong {
  font-size: 1.2rem;
}

em {
  font-weight: bold;
  color: purple;
}

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
