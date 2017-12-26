<template>
    <div class="container">
        <div class="row">
            <h2>Add Product</h2>
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <form class="form-horizontal" @submit.prevent="submitPost">
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Product Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"
                                   name="name"
                                   v-model="product.name"
                                   v-validate="'required'"
                                   placeholder="Name"
                                   autofocus>

                            <div v-show="errors.has('name')" class="help-block alert alert-danger">
                                {{ errors.first('name') }}
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">Quantity</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control"
                                   name="Qunatity"
                                   v-model="product.quantity"
                                   placeholder="Quantity"
                                   v-validate="'required|max_value:5'">

                            <div v-show="errors.has('Qunatity')" class="help-block alert alert-danger">

                                {{ errors.first('Qunatity') }}
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">Price p.u- $</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control"
                                   name="Price"
                                   v-model="product.price"
                                   placeholder="price"
                                   v-validate="'required|max:10'"
                            >

                            <div v-show="errors.has('Price')" class="help-block alert alert-danger">
                                    {{ errors.first('Price') }}

                            </div>

                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">Pick a Image</label>
                        <div class="col-sm-10">
                            <input type="file" class="form-control"
                                   name="Image"
                                   @change="getImage($event)"
                                   v-validate="'mimes:image/jpeg,image/png'">
                            <div v-show="errors.has('Image')" class="help-block alert alert-danger">
                                {{ errors.first('Image') }}
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button class="btn btn-default"
                                    type="submit"
                                    v-show="product.name && product.quantity && product.price"
                            >Add to List</button>
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

        data(){
            return{
                product : {
                    name: '',
                    quantity: 0,
                    price: 0,
                    image:''
                }
            }
        },
        methods:{

            getImage(e){

                var fileReader = new FileReader();

                fileReader.readAsDataURL(e.target.files[0]);
                fileReader.onload = (e)=> {
                    this.product.image = e.target.result
                };

                console.log(this.product)

            },

            submitPost(){
                this.$http.post("http://localhost:8000/api/addProduct",this.product)
                    .then(function (response) {
                       this.$router.push('/feed')
                    });
            }
        }
    }



</script>



