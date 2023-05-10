<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md12>
        <p class="mt-5">
          <b>ESTRRADO <span class="mx-3">></span> My Cart</b>
        </p>
        <v-divider></v-divider>
      </v-flex>
      <v-flex md12 class="mt-10">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left"></th>
                <th class="text-left">NAME</th>
                <th>Quantity</th>
                <th class="text-left">PRICE</th>
                <th class="text-left">TOTAl</th>
                <th class="text-left">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in CART" :key="item.code">
                <td>
                  <img :src="item.display_picture" alt="" style="width: 64px" />
                </td>
                <td>
                  <b>{{ item.name }}</b>
                </td>
                <td>{{ item.quantity }}</td>
                <td>
                  &#8377;<span class="mrp mx-1">{{ item.mrp }}</span
                  >{{ item.price }}
                </td>
                <td>&#8377;{{ item.price * item.quantity }}</td>
                <td>
                  <v-icon color="red" @click="removeFromCart(item)"
                    >mdi-delete</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>

        <div class="text-right">
          <p class="mt-10">GRANT TOTAL : {{ CART_TOTAL }}</p>
          <v-btn large class="blue white--text px-10">checkout</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      total: 0,
      subtotal: 0,
      gst: 0,
    };
  },
  computed: { ...mapGetters(["CART", "CART_TOTAL"]) },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("REMOVE_FROM_CART", item);
      this.$toasted.show("Product removed from cart", { duration: 3000 });
    },
    async checkout() {
      let url = "";
      let payload = {
        cart: this.CART,
        user: "",
        total: "",
      };
      let { data } = await Axios.post(url, payload);
    },
  },
};
</script>
