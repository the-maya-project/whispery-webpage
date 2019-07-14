<template>
  <section>
    <div class="container" id="postcard">
      <div class="post">
        <h2>Hello this is my first post yoohoooooooooo</h2>
      </div>

      <div class="location">
        <h6>Somewhere in SG</h6>
      </div>

      <div class="timestamp">
        <h6><font-awesome-icon icon="clock" /> 5 min ago</h6>
      </div>

      <div class="user">
        <font-awesome-icon icon="user" />
        <h4>@anonyMOUSE</h4>
      </div>

      <vote>
        <font-awesome-icon icon="chevron-up" />
      </vote>
    </div>
  </section>
</template>

<script>

const Vote = {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
}

export default {
  components: {
    Vote
  },
  data () {
    return {
      msg: 'Vote here!'
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
