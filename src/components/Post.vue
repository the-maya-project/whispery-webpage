<template>
  <section>
    <div class="container" id="postcard">
      <div class="text">
        <h2>{{ postData.postContent }}</h2>
      </div>

      <div class="location">
        <h6>{{ postData.distance }}m away</h6>
      </div>

      <div class="timestamp">
        <h6><font-awesome-icon icon="clock" /> {{ postData.postTimestamp | formatDate }}</h6>
      </div>

      <div class="user">
        <br>
        <h4><font-awesome-icon icon="user" /> {{ postData.uid }}</h4>
      </div>

      <div class="vote">
        <font-awesome-icon icon="chevron-up" @click="like"/>
        <h3>{{ postData.postLikes }}</h3>
        <font-awesome-icon icon="chevron-down" @click="dislike" />
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Post',
  props: {
    postData: Object
  },
  filters: {
    formatDate (val) {
      if (!val) {
        return '-'
      }

      // let date = new Date(val)
      let date = val.toDate()
      return moment(date).fromNow()
    },
    trimLength (val) {
      if (val.length < 200) {
        return `${val.substring(0, 200)}...`
      }
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
    padding: 10px 25px 10px 25px;
    height: 150px;
    width: 40%;
    align-self: center;
    margin-bottom: 5px
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

  .vote {
    position: absolute;
    right: 10px;
    bottom: 40px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }
</style>
