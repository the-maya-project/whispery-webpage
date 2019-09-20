<template>
  <section class="section">
    <div class="login">
      <b-tabs position="is-centered" v-model="activeTab">
          <b-tab-item label="signup">
              <div class="signup">
                <h1>create a new account</h1>

                <b-field label="email">
                  <b-input type="email" v-model="email" placeholder="email"></b-input>
                </b-field>

                <b-field grouped>
                  <b-field label="password" expanded>
                    <b-input type="password" v-model="password" placeholder="password" password-reveal></b-input>
                  </b-field>

                  <b-field label="confirm password" expanded>
                    <b-input type="password" v-model="confirmPassword" placeholder="confirm password" password-reveal></b-input>
                  </b-field>
                </b-field>

                <b-button type="is-warning" class="button" @click="signup">signup</b-button>
              </div>
          </b-tab-item>

          <b-tab-item label="login">
            <h1>login</h1>

            <b-field label="email">
              <b-input type="email" v-model="email" placeholder="email"></b-input>
            </b-field>

            <b-field label="password">
              <b-input type="password" v-model="password" placeholder="password" password-reveal></b-input>
            </b-field>

            <b-button type="is-warning" class="button" @click="login">login</b-button>
          </b-tab-item>

          <b-tab-item label="go anon">
            <br>
            <p><font-awesome-icon class="ghosticon" icon="ghost" size="3x" /></p>
            <br>
            <p>stay under the radar</p>
            <b-button type="is-dark" class="button">phantom</b-button>
          </b-tab-item>
      </b-tabs>
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
      password: '',
      confirmPassword: '',
      activeTab: 1
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('feed')
        },
        (error) => {
          alert('Oops. ' + error.message)
        }
      )
    },
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

.login {
  max-width: 60%;
  margin: 0 auto;
}

.button {
  margin: .67em 0 .67em;
}

.ghosticon {
  color: #404041
}

</style>
