// Import Vue essentials
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router.js'

// Import bootstrap essentials
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import Axios
import Axios from 'axios';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.prototype.axios = Axios

// And we finally create the Vue app 😇
new Vue({
    router,
}).$mount('#app')