<template>
  <section class="section">
    <div class="login">
      <b-tabs position="is-centered" v-model="activeTab">
          <div class="signup">
            <b-tab-item label="signup">
              <transition name="fade">
                <div v-if="performingRequest" class="loading">
                  <p>Loading...</p>
                </div>
              </transition>

              <form @submit.prevent>
                <h1>create a new account</h1>

                <b-field label="email">
                  <b-input type="email" v-model.trim="signupForm.email" placeholder="email"></b-input>
                </b-field>

                <b-field grouped>
                  <b-field label="password" expanded>
                    <b-input type="password" v-model.trim="signupForm.password" placeholder="password" password-reveal></b-input>
                  </b-field>

                  <b-field label="confirm password" expanded>
                    <b-input type="password" v-model.trim="signupForm.confirmPassword" placeholder="confirm password" password-reveal></b-input>
                  </b-field>
                </b-field>

                <b-button type="is-warning" class="button" @click="signup">signup</b-button>
              </form>
            </b-tab-item>
          </div>

          <div class="login">
            <b-tab-item label="login">
              <transition name="fade">
                <div v-if="performingRequest" class="loading">
                  <p>Loading...</p>
                </div>
              </transition>

              <form @submit.prevent>
                <h1>login</h1>

                <b-field label="email">
                  <b-input type="email" v-model.trim="loginForm.email" placeholder="email"></b-input>
                </b-field>

                <b-field label="password">
                  <b-input type="password" v-model.trim="loginForm.password" placeholder="password" password-reveal></b-input>
                </b-field>

                <b-button type="is-warning" class="button" @click="login">login</b-button>
              </form>
            </b-tab-item>
          </div>

          <div class="anon">
            <b-tab-item label="go anon">
                <br>

                <transition name="fade">
                  <div v-if="performingRequest" class="loading">
                    <p>Loading...</p>
                  </div>
                </transition>

                <p><font-awesome-icon class="ghosticon" icon="ghost" size="3x" /></p>
                <br>
                <p>stay under the radar</p>
                <b-button type="is-dark" class="button">phantom</b-button>
            </b-tab-item>
          </div>
      </b-tabs>
    </div>
  </section>
</template>

<script>
// const firebase = require('../../config/firebaseConfig.js')
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      performingRequest: false,
      activeTab: 1
    }
  },
  methods: {
    login () {
      this.performingRequest = true

      firebase.auth().signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(
        (user) => {
          this.$store.commit('setCurrentUser', user)
          // this.$store.dispatch('fetchUserProfile')
          this.performingRequest = false
          this.$router.push('/feed')
        },
        (error) => {
          alert('Oops. ' + error.message)
        }
      )
    },
    signup () {
      this.performingRequest = true

      firebase.auth().createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password, this.signupForm.confirmPassword).then(
        (user) => {
          this.$store.commit('setCurrentUser', user)

          // Create user object
          // firebase.usersCollection.doc(user.uid).set({
          //   email: this.signupForm.email
          // }).then(() => {
          //   this.$store.dispatch('fetchUserProfile')
          this.performingRequest = false
          this.$router.push('/feed')
          // }).catch(err => {
          //   console.log(err)
          //   this.performingRequest = false
          // })
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
