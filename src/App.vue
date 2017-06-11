<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="home">Home</router-link>
    <router-link to="gallery">Gallery</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
