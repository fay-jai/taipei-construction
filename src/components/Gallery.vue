<template>
  <div class="gallery">
    <carousel
      :name="bathroomName"
      :photos="bathroom">
    </carousel>
    <carousel
      :name="kitchenName"
      :photos="kitchen">
    </carousel>
  </div>
</template>

<script>
import Carousel from './Carousel';
import Images from '../data/images';
import store from '../store';

export default {
  name: 'gallery',
  data() {
    const { bathroom, kitchen } = Images;

    return {
      bathroom,
      kitchen,
    };
  },
  computed: {
    lang() {
      return store.state.lang;
    },
    bathroomName() {
      return this.lang === 'en' ? 'Bathroom' : '浴室';
    },
    kitchenName() {
      return this.lang === 'en' ? 'Kitchen' : '厨房';
    },
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
