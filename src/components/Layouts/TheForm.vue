<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{
      invalid: userValid === 'invalid',
      valid: userValid === 'valid'
    }">
      <label for="name">Your name</label>
      <input type="text" name="name" id="name" v-model.trim="userName" @blur="checkUserInput">
      <p v-if="userValid === 'invalid'">Enter your name</p>
    </div>
    <h3>My learning experience was...</h3>
    <div class="form-radio">
      <div class="form-flex">
        <label for="poor">Poor</label>
        <input type="radio" name="experience" value="poor" id="poor" v-model="learnExperiences">
      </div>
      <div class="form-flex">
        <label for="average">Average</label>
        <input type="radio" name="experience" value="average" id="average" v-model="learnExperiences">
      </div>
      <div class="form-flex">
        <label for="great">Great</label>
        <input type="radio" name="experience" value="great" id="great" v-model="learnExperiences">
      </div>
    </div>
    <base-button>Submit</base-button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      userValid: 'default',
      learnExperiences: 'poor'
    }
  },
  methods: {
    submitForm () {
      if (this.userValid === 'valid') {
        const data = {
          name: this.userName,
          experienceLevel: this.learnExperiences
        }
        this.$emit('get-user-data', data)
        this.userValid = 'default'
        this.userName = ''
      }
    },
    checkUserInput () {
      if (this.userName === '') {
        this.userValid = 'invalid'
      } else {
        this.userValid = 'valid'
      }
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

h3 {
  margin-bottom: 2rem;
  font-weight: bold;
}

.form-control {
  margin-bottom: 2rem;

  &.valid {
    input {
      border-color: green;
    }
  }

  &.invalid {
    label {
      color: darkred;
    }

    input {
      border-color: darkred;
    }
  }

  input {
    text-indent: 1rem;
  }

  p {
    font-size: .8rem;
    font-weight: bold;
    color: darkred;
  }
}

.form-radio {
  margin-bottom: 3rem;
}

.form-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .4rem;
  padding: .2rem 1rem;
  width: 10rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  transition: all .2s;

  &:hover {
    background-color: purple;

    label {
      color: white;
    }
  }

  &:active {
    background-color: darken(purple, 10%);
  }

  label {
    display: block;
    width: 100%;
    font-weight: bold;
    color: purple;
    cursor: pointer;
  }
}
</style>
