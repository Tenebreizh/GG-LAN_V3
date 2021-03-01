import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Hello from './components/Pages/Hello.vue'
import Foo from './components/Pages/Foo.vue'
import Home from './components/Pages/Home.vue'


const routes = [
    { name: "home", path: '/', component: Home },
    { name: "hello", path: '/hello', component: Hello },
    { name: "foo", path: '/foo', component: Foo },
]

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes,
}); 