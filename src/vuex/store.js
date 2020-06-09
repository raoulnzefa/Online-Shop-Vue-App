import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS (state, products) {
            state.products = products
        },
        ADD_TO_CART(state, product) {
            state.cart.push(product);
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
        },
        ADD_TO_CART({commit}, product) {
            commit("ADD_TO_CART", product);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;