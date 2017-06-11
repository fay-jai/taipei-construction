<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <router-link to="home">Taipei Construction</router-link>
      </div>
      <ul class="navigation">
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

<style scoped>
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
