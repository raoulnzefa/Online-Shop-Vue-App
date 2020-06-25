export default {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  ADD_TO_CART(state, product) {
    if (!state.cart.length) {
      state.cart.push(product);
    } else {
      let similarItem = state.cart.filter(
        item => item.article === product.article
      )[0];
      if (similarItem) {
        similarItem.amount++;
      } else {
        state.cart.push(product);
      }
    }
  },
  DELETE_FROM_CART(state, article) {
    state.cart = state.cart.filter(item => item.article !== article);
  }
};
