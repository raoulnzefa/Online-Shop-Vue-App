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
            if(!state.cart.length) {
                state.cart.push(product);
            } else {
                let similarItem = state.cart.filter((item) => item.article === product.article)[0];
                if (!similarItem) {
                    state.cart.push(product);
                }
            }
        },
        DELETE_FROM_CART(state, article) {
            state.cart = state.cart.filter((item) => item.article !== article);
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
        },
        DELETE_FROM_CART ({commit}, article) {
            commit("DELETE_FROM_CART", article);
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