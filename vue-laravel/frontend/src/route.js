/**
 * Created by Rajith Thennakoon on 7/4/2017.
 */
import Vue from 'vue'
import VueRouter from 'vue-router';

/*pages
* */
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Product from './components/Product.vue'
import Feed from './components/Feed.vue'
import Edit from './components/Edit.vue'
import Home from './components/Home.vue'


Vue.use(VueRouter);

const router = new VueRouter({

    mode:'history',

    routes:[

        {
            path:"",
            component:Home
        },
        {
            path:"/feed",
            component:Feed
        },
        {
            path:"/add",
            component:Product
        },

        {
            path:"/edit/:id",
            component:Edit
        },

        {
            path:"/about",
            component:About
        },
        {
            path:"/contact",
            component:Contact
        },

    ]

})



export default router