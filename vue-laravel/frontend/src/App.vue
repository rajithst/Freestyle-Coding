<template>
  <div id="app">
      <navbar></navbar>
      <router-view></router-view>
  </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Product from './components/Product.vue'
export default {

        components:{
            'navbar':Navbar,
        },
        

}
</script>

