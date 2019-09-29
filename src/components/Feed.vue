<template>
  <section>
    <b-field label="Decide your distance of reach">
      <b-slider rounded id="radius_slider" v-model="postRadius" :max="10"></b-slider>
    </b-field>
    <CreatePost v-on:submittingPost="createPost" v-on:increment="counter++"></CreatePost>
    <br>
    <!-- <button class="button" type="button" @click="seeStates" /> -->
    <div v-for="post in posts" v-bind:key="post">
      <Post :postData="post"></Post>
    </div>
  </section>
</template>

<script>
import Post from '@/components/Post'
import CreatePost from '@/components/CreatePost'
// import { now } from 'moment'
import { firestore } from 'firebase'
import { mapState } from 'vuex'
const firebase = require('../../config/firebaseConfig.js')

export default {
  name: 'feed',
  components: {
    Post,
    CreatePost
  },
  data () {
    return {
      posts: [],
      newPostContent: '',
      latitude: -1,
      longitude: -1,
      newPos: null,
      postRadius: 5
      // currentUser: this.$store.state.currentUser,
      // posts: this.$store.state.posts
    }
  },
  computed: {
    ...mapState(['currentUsers', 'posts'])
  },
  beforeMount () {
    this.retrievePosts()
  },
  methods: {
    seeStates () {
      alert('$store: ', this.currentUser)
      alert('$store: ', this.posts)
    },
    retrievePosts () {
      firebase.postsCollection.get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.')
            return
          }

          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            this.posts.push({
              distance: doc.get('distance'),
              postCommentCount: doc.get('postCommentCount'),
              postContent: doc.get('postContent'),
              postGeolocation: doc.get('postGeolocation'),
              postLatitude: doc.get('postLatitude'),
              postLongitude: doc.get('postLongitude'),
              postLikes: doc.get('postLikes'),
              postTimestamp: doc.get('postTimestamp'),
              type: doc.get('type'),
              uid: doc.get('uid')
            })
            console.log(doc.id, '=>', doc.data())
          })
        })
        .catch(err => {
          console.log('Error getting documents', err)
        })
    },
    createPost (content) {
      // Fetch coordinates
      // this.newPos = this.fetchLocation
      // console.log('Fetched position: ', this.newPos)

      this.newPostContent = content
      console.log(content)

      // Submit new post to Firebase
      firebase.postsCollection.add({
        distance: 0,
        postCommentCount: 0,
        postContent: this.newPostContent,
        postGeolocation: new firestore.GeoPoint(0.00, 0.00),
        postLatitude: 0.00,
        postLongitude: 0.00,
        postLikes: 0,
        postTimestamp: firestore.Timestamp.now(),
        type: 'post',
        uid: 'testest'
      }).then(ref => {
        this.newPostContent = ''
        // this.newPos = null
      }).catch(err => {
        console.log(err)
      })
    }
  }
  // computed: {
  //   fetchLocation: function () {
  //     let pos = null
  //     // listen to Cordova event
  //     Vue.cordova.on('deviceready', () => {
  //       console.log('Cordova : device is ready !')
  //     }).then(pos => {
  //       Vue.cordova.geolocation.getCurrentPosition((position) => {
  //         pos = position
  //         // this.latitude = position.coords.latitude
  //         // this.longitude = position.coords.longitude
  //         window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
  //       }, (error) => {
  //         window.alert('FAILED Error #' + error.code + ' ' + error.message)
  //       }, {
  //         timeout: 1000,
  //         enableHighAccuracy: true
  //       })
  //       console.log(pos.coords.latitude, ', ', pos.coords.longitude)
  //     })

  //     return pos
  //   }
  // }
}
</script>

<style>
#radius_slider {
  box-sizing: inherit;
  padding-left: 25%;
  padding-right: 25%;
}
</style>
