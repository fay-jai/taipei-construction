<template>
  <div class="gallery">
    <carousel
      name="Bathroom"
      :photos="bathroom">
    </carousel>
    <carousel
      name="Kitchen"
      :photos="kitchen">
    </carousel>
  </div>
</template>

<script>
import Carousel from './Carousel';
import Images from '../data/images';

const { bathroom, kitchen } = Images;

export default {
  name: 'gallery',
  data() {
    return {
      bathroom,
      kitchen,
    };
  },
  components: {
    carousel: Carousel,
  },
};
</script>

<style>
.gallery .wrapper {
  flex: 0 !important;
}
</style>
