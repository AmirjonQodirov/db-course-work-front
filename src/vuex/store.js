
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        basket: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        REM_FROM_BASKET: (state, id) => {
            state.basket.splice(id, 1);
        },
        DECREMENT_ITEM_FROM_BASKET: (state, id) => {
            if (state.basket[id].quantity > 1) {
                state.basket[id].quantity--
            }
        },
        INCREMENT_ITEM_FROM_BASKET: (state, id) => {
            if (state.basket[id].quantity < 10) {
                state.basket[id].quantity++
            }
        },

    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                }).catch((error) => {
                    console.log(error);
                })
        },

        REMOVE_FROM_BASKET({commit}, id) {
            commit('REM_FROM_BASKET', id)
        },
        INCREMENT({commit}, id) {
            commit('INCREMENT_ITEM_FROM_BASKET', id)
        },
        DECREMENT({commit}, id) {
            commit('DECREMENT_ITEM_FROM_BASKET', id)
        },

    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        BASKET(state) {
            return state.basket;
        },
    }
});

export default store;