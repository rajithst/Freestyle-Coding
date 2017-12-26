<template>
    <div class="container">
        <h2>Products</h2>
        <hr>
        <div class="row">
            <ul class="thumbnails">
                <div class="col-md-4" v-for="item in productlist">
                    <div class="thumbnail">
                        <img v-bind:src="'http://localhost:8000/'+item.image" alt="ALT NAME" class="img-responsive"  style="width:320px;height:200px;"/>
                        <div class="caption">
                            <h3> Name - {{ item.name }}</h3>
                            <p>Unit Price - $ {{ item.price }}</p>
                            <p>Quantity - {{ item.quantity }}</p>
                            <p align="center">
                                <router-link class="btn btn-warning" :to=" '/edit/'+item.id">Edit</router-link> &nbsp;
                                <button class="btn btn-danger" @click="deleteItem($event)" v-bind:id=item.id>Delete</button>
                            </p>

                        </div>
                    </div>
                </div>

            </ul>
        </div>
    </div>

</template>


<script>

    export default{

        data(){
            return{

                productlist:[]
            }
        },
        created(){
            this.$http.get("http://localhost:8000/api/getProducts")
                .then(function (response) {
                    this.productlist = response.body.allproducts;
                    console.log(this.productlist)
                });
        },
        methods:{

            deleteItem(event){

                this.$http.delete("http://localhost:8000/api/deleteProduct/"+event.target.id)
                    .then(function (response) {

                        var position = this.productlist.findIndex( function (element) {

                            return element.id == event.target.id;
                        });

                        this.productlist.splice(position,1)


                    });
            }
        }

    }

</script>

<style>
    img{


        height:200px;
    }

</style>