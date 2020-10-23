<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadResults">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue'

export default {
  data () {
    return {
      results: []
    }
  },
  methods: {
    loadResults () {
      fetch('https://vue-http-demo-1bb78.firebaseio.com/surveys.json')
        .then((result) => {
          if (result.ok) {
            return result.json()
          }
        })
        .then(result => {
          const resultArr = []

          for (const elem in result) {
            resultArr.push({
              id: elem,
              name: result[elem].name,
              rating: result[elem].rating
            })
          }

          this.results = resultArr
        })
    }
  },
  components: {
    SurveyResult
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
