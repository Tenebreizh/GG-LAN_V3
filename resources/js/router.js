import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Hello from './components/Pages/Hello.vue'
import Foo from './components/Pages/Foo.vue'
import Home from './components/Pages/Home.vue'


const routes = [
    { name: "dashboard",   path: '/',            component: Home  },
    { name: "players",     path: '/players',     component: Hello },
    { name: "teams",       path: '/teams',       component: Foo   },
    { name: "games",       path: '/games',       component: Hello },
    { name: "tournaments", path: '/tournaments', component: Foo   },
    { name: "articles",    path: '/articles',    component: Foo   },
    { name: "rules",       path: '/rules',       component: Hello }
]

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes,
}); 