<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <router-link to="/">
          <img src="./assets/logo.png" />
        </router-link>
      </div>
      <ul class="navigation">
        <li class="navigation-item"><router-link to="gallery">{{ galleryName }}</router-link></li>
        <li class="navigation-item"><router-link to="contact">{{ contactName }}</router-link></li>
        <li
          class="navigation-item lang"
          @click="setLang">
          {{ languageName }}
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      lang: 'en',
    };
  },
  computed: {
    contactName() {
      return this.lang === 'en' ? 'Contact' : '联系';
    },
    galleryName() {
      return this.lang === 'en' ? 'Gallery' : '画廊';
    },
    languageName() {
      return this.lang === 'en' ? '中文' : 'English';
    },
  },
  methods: {
    setLang() {
      this.lang = this.lang === 'en' ? 'ch' : 'en';
    },
  },
};
</script>

<style>
body {
  background-color: powderblue;
  color: darkred;
}

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
