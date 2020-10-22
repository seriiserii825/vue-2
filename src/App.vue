<template>
  <div id="app">
    <base-card title="How was you learning experience?">
      <the-form @get-user-data="getUserData"></the-form>
    </base-card>
    <base-card title="Submited Experience">
      <answer
        :experiences="experiences"
      ></answer>
    </base-card>
  </div>
</template>

<script>
import TheForm from '@/components/Layouts/TheForm'
import Answer from '@/components/Answer'

export default {
  data () {
    return {
      experiences: []
    }
  },
  methods: {
    getUserData (userData) {
      const generatedId = Date.now()
      const experienceItem = {
        id: generatedId,
        name: userData.name,
        experienceLevel: userData.experienceLevel,
        defaultString: ' rate the learning experience '
      }

      this.experiences.unshift(experienceItem)
    }
  },
  components: {
    TheForm,
    Answer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
ul {
  list-style-type: none;
}
</style>
