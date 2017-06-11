<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        Taipei Construction
      </div>
      <ul class="navigation">
        <li class="navigation-item"><router-link to="home">Home</router-link></li>
        <li class="navigation-item"><router-link to="gallery">Gallery</router-link></li>
      </ul>
    </div>
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

.header {
    display: flex;
    justify-content: space-between;
}

.navigation {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navigation-item {
    padding: 0 0 0 20px;
}
</style>
