import axios from "axios";

export default {
    FETCH_PRODUCTS({ commit }) {
        return axios("http://localhost:3000/products", {
            method: "GET"
        })
        .then((products)=>{
            commit("SET_PRODUCTS", products.data);
            return products;
        })
    },
    ADD_TO_CART({commit}, product) {
        commit("ADD_TO_CART", product);
    },
    DELETE_FROM_CART ({commit}, article) {
        commit("DELETE_FROM_CART", article);
    }
}