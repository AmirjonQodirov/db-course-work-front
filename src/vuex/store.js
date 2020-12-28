
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        basket: [],
        orders: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        REM_FROM_BASKET: (state, id) => {
            state.basket.splice(id, 1);
        },
        SET_FOOD_BASKET: (state, products) => {
            let isSubExists = false;
            if (state.basket.length) {
                state.basket.map(function (item) {
                    if (item.id === products.id) {
                        isSubExists = true;
                        if (item.quantity < 10) {
                            item.quantity++
                        }
                    }
                })
                if (!isSubExists) {
                    state.basket.push(products)
                }
            } else {
                state.basket.push(products)
            }
        },
        SET_ORDER_TO_STATE: (state, orders) => {
            state.orders = orders;
        },
        DECREMENT_ITEM_FROM_BASKET: (state, id) => {
            if (state.basket[id].quantity > 1) {
                state.basket[id].quantity--
            }
        },
        INCREMENT_ITEM_FROM_BASKET: (state, id) => {
            if (state.basket[id].quantity < 20) {
                state.basket[id].quantity++
            }
        },
        CLEAR_BASKET: (state) => {
            state.basket = [];
        },

    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            let auth = localStorage.getItem('currentUser');
            return axios('http://localhost:3000/products', {
                method: "GET",
                Authorization: auth
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                }).catch((error) => {
                    console.log(error);
                })
        },
        GET_ORDER_FROM_API({commit}) {
            let auth = localStorage.getItem('currentUser');
            return axios('http://localhost:3000/orders', {
                method: "GET",
                Authorization: auth
            })
                .then((orders) => {
                    commit('SET_ORDER_TO_STATE', orders.data);
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
        ADD_PRODUCT_TO_BASKET({commit}, products) {
            commit('SET_FOOD_BASKET', products);
        },
        CLEAR_BASKET({commit}){
            commit('CLEAR_BASKET');
        }

    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        BASKET(state) {
            return state.basket;
        },
        ORDERS(state) {
            return state.orders;
        },
    }
});

export default store;