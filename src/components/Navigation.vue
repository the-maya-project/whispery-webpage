<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" transparent :to="{ path: '/' }">
        <img
          src="../assets/whispery.png"
          alt="Speak your mind, find like minds"
        >
      </b-navbar-item>
    </template>
    <!-- <template slot="start">
      <b-navbar-item href="/">
        Home
      </b-navbar-item>
      </b-navbar-dropdown>
    </template> -->

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" v-if="currentUser" @click="logout">
            <strong>Logout</strong>
          </a>
          <a class="button is-primary" v-else href="login">
            <strong>Login</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'

const firebase = require('../../config/firebaseConfig.js')

export default {
  methods: {
    logout () {
      firebase.auth.signOut().then(() => {
        this.$store.dispatch('clearData')
        this.$router.push('/login')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style scoped>

</style>
