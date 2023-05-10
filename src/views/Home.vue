<template>
  <div class="home">
    <Carousel />
    <v-container>
      <Products />
    </v-container>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Products from "../components/Products.vue";
export default {
  name: "Home",
  components: {
    Carousel,
    Products,
  },
};
</script>
