import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const firebase = require('../config/firebaseConfig.js')

export const store = new Vuex.Store({
  state: {
    currentUser: null
    // userProfile: {}
  },
  actions: {
    // fetchUserProfile ({ commit, state }) {
    //   firebase.usersCollection.doc(state.currentUser.uid).get().then(
    //     res => {
    //       commit('setUserProfile', res.data())
    //     }
    //   ).catch(err => {
    //     console.log(err)
    //   })
    // }
  },
  mutations: {
    setCurrentUser (state, val) {
      state.currentUser = val
    }
    // setUserProfile (state, val) {
    //   state.userProfile = val
    // }
  }
})
