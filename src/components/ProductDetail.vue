<template>
  <div class="text-center">
    <v-dialog persistent v-model="DIALOG" width="800">
      <v-card>
        <v-layout row-wrap>
          <v-flex md6>
            <v-img :src="PRODUCT_DETAILS.display_picture"></v-img>
          </v-flex>
          <v-flex md6 class="pa-5">
            <div class="text-right">
              <v-btn color="black" text @click="closeDialog">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <h1 class="mt-5">{{ PRODUCT_DETAILS.name.toUpperCase() }}</h1>
            <h3 class="mt-2 orange--text text--darken-4">
              &#8377;
              <span class="mrp px-1 grey--text">{{ PRODUCT_DETAILS.mrp }}</span
              >{{ PRODUCT_DETAILS.price }}
            </h3>
            <p class="mt-5 grey--text text--darken-3">
              {{ PRODUCT_DETAILS.description }}
            </p>
            <v-divider class="mb-2"></v-divider>
            <div class="text-right">
              <span class="mr-3">Quantity</span>
              <v-btn
                class="mx-1 blue"
                fab
                dark
                x-small
                @click="decrementQuantity"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn class="" text>{{ quantity }}</v-btn>
              <v-btn
                class="mx-1 blue"
                fab
                dark
                x-small
                @click="incrementQuantity"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>

            <v-btn
              class="blue white--text mt-3"
              block
              x-large
              @click="addToCart(PRODUCT_DETAILS)"
            >
              add to cart</v-btn
            >
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import Axios from 'axios'
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters(["DIALOG", "PRODUCT_DETAILS"]),
  },

  methods: {
    closeDialog() {
      this.$store.dispatch("CLOSE_DIALOG");
    },
    addToCart(item) {
      item.quantity = this.quantity;
      this.$store.dispatch("ADD_TO_CART", item);
      this.$toasted.show("Product Added to Cart", { duration: 3000 });
      this.$router.push("/cart");
    },
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>