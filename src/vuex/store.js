import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCTS (state, products) {
            state.products = products
        }
    },
    actions: {
        FETCH_PRODUCTS({ commit }) {
            return axios("http://localhost:3000/products", {
                method: "GET"
            })
            .then((products)=>{
                commit("SET_PRODUCTS", products.data);
                return products;
            })
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    }
});

export default store;