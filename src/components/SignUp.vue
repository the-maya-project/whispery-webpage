<template>
  <section class="section">
    <div class="signup">
      <h1>Create a new account</h1>

      <b-field label="Email">
        <b-input type="email" v-model="email" placeholder="Email"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" v-model="password" placeholder="Password" password-reveal></b-input>
      </b-field>
      <b-button type="is-success" class="button" @click="signup" outlined>Sign Up</b-button>

      <p style="padding: 0.5em">or go back to <router-link to="/login">login</router-link>.</p>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
        },
        (error) => {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          if (errorCode === 'auth/email-already-in-use') {
            alert('The email is already in use. Please use another email or login now!')
          } else if (errorCode === 'auth/invalid-email') {
            alert('The email is invalid.')
          } else if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.')
          } else {
            alert(errorMessage)
          }
          console.log(error)
        }
      )
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

.signup {
  max-width: 60%;
  margin: 0 auto;
}

.button {
  margin: .67em 0 .67em;
}

</style>
