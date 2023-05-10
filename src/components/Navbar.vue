<template>
  <v-app-bar app color="white" light>
    <div class="d-flex align-center">
      <h2 @click="goHome">ESTRRADO</h2>
    </div>
    <v-spacer></v-spacer>
    <v-btn text @click="goHome"> Home </v-btn>
    <v-btn text> About </v-btn>
    <v-btn text> Contact </v-btn>
    <v-btn text> SIGN IN </v-btn>
    <v-btn text @click="gotoCart">
      <v-icon>mdi-cart-outline</v-icon>
      <h3>{{ CART_COUNT }}</h3>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["CART_COUNT"]),
  },
  methods: {
    gotoCart() {
      this.$router.push("/cart");
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>