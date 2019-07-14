<template>
  <section class="section">
    <div class="login">
      <h1>Sign In</h1>

      <b-field label="Email">
        <b-input type="email" v-model="email" placeholder="Email"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" v-model="password" placeholder="Password" password-reveal></b-input>
      </b-field>

      <b-button type="is-success" class="button" @click="login">Log In</b-button>

      <br>
      <br>
      <p>Don't have an account? Create one now!</p>
      <b-button type="is-success" class="button" @click="signup" outlined>Sign Up</b-button>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
        },
        (error) => {
          alert('Oops. ' + error.message)
        }
      )
    },
    signup: function () {
      this.$router.replace('signup')
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 2em;
  margin-bottom: .67em;
}

.section {
  text-align: center;
  padding: 25px 15px 25px 15px;
}

.login {
  max-width: 60%;
  margin: 0 auto;
}

.button {
  margin: .67em 0 .67em;
}

</style>
