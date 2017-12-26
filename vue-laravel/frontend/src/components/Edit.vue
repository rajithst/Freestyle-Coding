<template>
    <div class="container">
        <div class="row">
            <h2>Update Product</h2>
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <form class="form-horizontal" @submit.prevent="updatePost">
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Product Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" v-model="product.name" placeholder="Name" autofocus>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">Quantity</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" v-model="product.quantity" placeholder="Quantity">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">Price p.u- $</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" v-model="product.price" placeholder="price">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button class="btn btn-default" type="submit">Update</button>
                        </div>
                    </div>
                </form>


            </div>
            <div class="col-md-2"></div>
        </div>

    </div>
</template>


<script>

    export default{

        created(){
            this.getData();

        },

        data(){
            return{
                product : {
                }
            }
        },
        methods:{

            getData(){
                this.$http.get("http://localhost:8000/api/getProduct/"+this.$route.params.id)
                    .then(function (response) {
                       this.product = response.body.item;
                    });
            },

            updatePost(){
                this.$http.put("http://localhost:8000/api/editItem/"+this.$route.params.id,this.product)
                    .then(function (response) {
                        this.$router.push('/feed')
                    });
            }
        }
    }



</script>



