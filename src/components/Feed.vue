<template>
  <section>
    <div class="container">
      <!-- Pass an object, defined in the `retrievePosts()` method -->
      <Post :postData="posts"></Post>
    </div>
  </section>
</template>

<script>
import Post from '@/components/Post'
const fb = require('../../config/firebaseConfig.js')

export default {
  name: 'feed',
  components: {
    Post
  },
  data () {
    return {
      msg: 'Vote here!',
      posts: []
    }
  },
  beforeMount () {
    this.retrievePosts()
  },
  methods: {
    retrievePosts () {
      fb.postsCollection.get()
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
    }
  }
}
</script>

<style>
  #postcard {
    border: 2px;
    border-color: #42b983;
    border-style: solid;
    color: #000000;
    padding: 10px;
    height: 150px;
    width: 40%;
    align-self: center
  }

  .location {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }

  .timestamp {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
</style>
