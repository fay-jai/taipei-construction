<template>
  <div class="carousel">
    <h1>{{ name }}</h1>
    <vue-images
      :imgs="photos"
      :modalclose="modalclose"
      :keyinput="keyinput"
      :mousescroll="mousescroll"
      :showclosebutton="showclosebutton"
      :showcaption="showcaption"
      :imagecountseparator="imagecountseparator"
      :showimagecount="showimagecount"
      :showthumbnails="showthumbnails">
    </vue-images>
  </div>
</template>

<script>
import vueImages from 'vue-images';

export default {
  name: 'Carousel',
  props: [
    'name',
    'photos',
  ],
  data() {
    return {
      modalclose: true,
      keyinput: true,
      mousescroll: true,
      showclosebutton: true,
      showcaption: true,
      imagecountseparator: 'of',
      showimagecount: true,
      showthumbnails: true,
    };
  },
  components: {
    vueImages,
  },
};
</script>

<style scoped>
</style>
