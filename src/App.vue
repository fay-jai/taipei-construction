<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <router-link to="/">
          <svg
            x="0px"
            y="0px"
            width="60"
            height="60"
            viewBox="0 0 27.02 27.02">
            <g>
              <path
                style="fill:#8b0000;"
                d="M3.674,24.876c0,0-0.024,0.604,0.566,0.604c0.734,0,6.811-0.008,6.811-0.008l0.01-5.581 c0,0-0.096-0.92,0.797-0.92h2.826c1.056,0,0.991,0.92,0.991,0.92l-0.012,5.563c0,0,5.762,0,6.667,0 c0.749,0,0.715-0.752,0.715-0.752V14.413l-9.396-8.358l-9.975,8.358C3.674,14.413,3.674,24.876,3.674,24.876z" />
              <path
                style="fill:#8b0000;"
                d="M0,13.635c0,0,0.847,1.561,2.694,0l11.038-9.338l10.349,9.28c2.138,1.542,2.939,0,2.939,0 L13.732,1.54L0,13.635z" />
              <polygon
                style="fill:#8b0000;"
                points="23.83,4.275 21.168,4.275 21.179,7.503 23.83,9.752" />
            </g>
          </svg>
          <span class="logo-name">Taipei Construction</span>
        </router-link>
      </div>
      <ul class="navigation">
        <li class="navigation-item"><router-link to="gallery">{{ galleryName }}</router-link></li>
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
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px
}

.logo {
  position: relative;
}

.logo a {
  color: darkred;
  text-decoration: none;
}

.logo-name {
  position: absolute;
  top: 0;
  left: 75px;
  font-size: 24px;
  font-weight: 600;
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

.lang:hover {
  cursor: pointer;
}
</style>
