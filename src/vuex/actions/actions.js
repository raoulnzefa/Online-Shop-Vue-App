import axios from "axios";

export default {
  FETCH_PRODUCTS({ commit }) {
    return axios("http://localhost:3000/products", {
      method: "GET"
    })
    .then(products => {
      return products.data.map(item => {
        return { ...item, amount: 1 };
      });
    })
    .then(items => {
      commit("SET_PRODUCTS", items);
      return items;
    });
  },
  ADD_TO_CART({ commit }, product) {
    commit("ADD_TO_CART", product);
  },
  DELETE_FROM_CART({ commit }, article) {
    commit("DELETE_FROM_CART", article);
  }
};
