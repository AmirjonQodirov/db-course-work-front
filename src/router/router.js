import Vue from 'vue'
import Router from 'vue-router'
import Auth from "../components/Auth/Auth";
import Catalog from "../components/Catalog/Catalog";


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