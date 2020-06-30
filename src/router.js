import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },{
            path: '/about',
            component: About
        },{
            path: '/contact',
            component: Contact
        },{
            path: '*',
            component: NotFound
        }
    ],
    mode: 'history'
})