<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
          v-model="searchText"
          style="width: 400px"
          single-line
          label="Search"
          prepend-icon="mdi-magnify"
        ></v-text-field>
      </v-flex>
      <v-flex
        class="pa-3"
        v-for="item in filteredResults"
        :key="item.title"
        md4
      >
        <v-hover v-slot="{ hover }">
          <v-card
            @click="openProductDetails(item)"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img
              :src="item.display_picture"
              class="white--text align-end"
              height="350px"
            >
            </v-img>
            <v-card-title v-text="item.name"> </v-card-title>

            <v-card-subtitle>
              <h3
                class="mt-2 orange--text text--darken-4"
                style="font-size=20px;font-weight:bold"
              >
                &#8377; <span class="mrp px-1 grey--text">{{ item.mrp }}</span
                >{{ item.price }}
              </h3>
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <product-details />
  </v-container>
</template>

<script>
import ProductDetails from "./ProductDetail.vue";
// import Axios from 'axios'
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      products: [],
      searchText: "",
    };
  },
  components: {
    ProductDetails,
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART_COUNT"]),
    filteredResults() {
      if (this.searchText == "") {
        return this.PRODUCTS;
      } else {
        return this.PRODUCTS.filter((item) => {
          return item.name
            .toUpperCase()
            .includes(this.searchText.toUpperCase());
        });
      }
    },
  },
  methods: {
    // viewDetails(title){
    //     this.$router.push({name : 'product-details',params : {code : code}})
    // },
    openProductDetails(item) {
      this.$store.dispatch("SET_PRODUCT_DETAILS", item);
      // alert("sdsd")
    },
  },
  mounted() {
    this.$store.dispatch("FETCH_PRODUCTS", this.$route.params.category);
  },
};
</script>


<style>
.mrp {
  text-decoration: line-through;
}
</style>