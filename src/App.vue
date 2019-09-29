<template>
  <div id="app">
    <Navigation />
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: { Navigation }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Barlow&display=swap');

#app {
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fafafa;
}
</style>
