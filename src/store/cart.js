const state = {
  cart: [],
};
const getters = {
  CART: (state) => {
    return state.cart;
  },
  CART_COUNT: (state) => {
    return state.cart.length;
  },
  CART_TOTAL: (state) => {
    var total = 0;
    for (var i = 0; i < state.cart.length; i++) {
      total += parseInt(state.cart[i].price) * parseInt(state.cart[i].quantity);
    }
    return total;
  },
};
const mutations = {
  ADD_TO_CART: (state, payload) => {
    state.cart.push(payload);
  },
  REMOVE_FROM_CART: (state, payload) => {
    const index = state.cart.indexOf(payload);
    if (index > -1) {
      state.cart.splice(index, 1);
    }
  },
};
const actions = {
  ADD_TO_CART: (context, payload) => {
    context.commit("ADD_TO_CART", payload);
  },
  REMOVE_FROM_CART: (context, payload) => {
    context.commit("REMOVE_FROM_CART", payload);
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
