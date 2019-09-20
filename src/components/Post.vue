<template>
  <section>
    <div class="container" id="postcard" v-for="post in postData" v-bind:key="post">
      <div class="text">
        <h2>{{ post.postContent }}</h2>
      </div>

      <div class="location">
        <h6>{{ post.postGeolocation }}</h6>
      </div>

      <div class="timestamp">
        <h6><font-awesome-icon icon="clock" /> {{ post.postTimestamp }}</h6>
      </div>

      <div class="user">
        <h4><font-awesome-icon icon="user" /> {{ post.uid }}</h4>
      </div>

      <div class="vote">
        <h3><font-awesome-icon icon="chevron-up" /> {{ post.postLikes }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Post',
  props: {
    postData: Array
  },
  data () {
    return {
      text: 'Hello this is my first post yoohoooooooooo',
      location: 'Somewhere in SG',
      timestamp: '5 min ago',
      user: '@anonyMOUSE',
      vote: 0
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
    bottom: 30px;
    left: 10px;
  }

  .timestamp {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
</style>
