import Vue from 'vue'
import Router from 'vue-router'
import Auth from "../components/Auth/Auth";
import Catalog from "../components/Catalog/Catalog";
import Basket from "../components/User/Basket";
import Orders from "../components/User/Orders";
import UserInfo from "../components/User/UserInfo";


Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/auth',
            name: 'auth',
            component: Auth,
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: Catalog,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/basket',
            name: 'basket',
            component: Basket,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/orders',
            name: 'orders',
            component: Orders,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/user',
            name: 'user',
            component: UserInfo,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            redirect: '/auth'
        },
    ]

});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('currentUser')) {
            next({
                path: '/'
            })
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;