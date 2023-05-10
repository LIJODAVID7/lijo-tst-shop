import Vue from "vue";
import Vuex from "vuex";
import products from "./products.js";
import cart from "./cart.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cart,
  },
});
