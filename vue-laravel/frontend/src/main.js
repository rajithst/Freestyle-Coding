import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Router from './route.js';
import VeeValidate  from 'vee-validate'


Vue.use(VueResource);
Vue.use(VeeValidate );

new Vue({
  el: '#app',
  render: h => h(App),
    router:Router
})
