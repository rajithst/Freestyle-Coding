import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue'
import Track from './components/Track.vue'


Vue.use(VueRouter);
Vue.component('app-nav',Navbar);

const routes = [
    {path:'/about' , component:About},
    {path:'/track' , name:'track',component:Track},
    {path:'/' , component:Home}

];

const router = new VueRouter({
   routes,
    mode:'history'

});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
