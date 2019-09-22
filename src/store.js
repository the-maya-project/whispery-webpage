import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const firebase = require('../config/firebaseConfig.js')

// Handle page reload
firebase.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    // store.dispatch('fetchUserProfile')
  }
})

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

    clearData ({ commit }) {
      commit('setCurrentUser', null)
      // commit('setUserProfile', {})
    }
  },
  mutations: {
    setCurrentUser (state, value) {
      state.currentUser = value
    }
    // setUserProfile (state, val) {
    //   state.userProfile = val
    // }
  }
})
