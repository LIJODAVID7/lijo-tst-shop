<template>
  <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">
            <img style="width: 100%" :src="slide" />
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        "https://estrrado-machine-test.s3.ap-south-1.amazonaws.com/banner1.png",
        "https://estrrado-machine-test.s3.ap-south-1.amazonaws.com/banner2.png",
        "https://estrrado-machine-test.s3.ap-south-1.amazonaws.com/banner3.png",
      ],
    };
  },
  methods: {
    gotoSearch() {
      this.$router.push("/search");
    },
  },
};
</script>
