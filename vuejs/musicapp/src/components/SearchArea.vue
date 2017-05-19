<template>




            <div class="form-group">
                <label for="inputEmail" class="col-lg-2 control-label">Search</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputEmail" placeholder="type in your head" @input="keyPressed">
                </div>
            </div>



</template>

<script>
    import axios from 'axios';

    export default {
        props:['resList'],

        data(){

            return {

                newSet: [],
            }
        },
        methods: {
            keyPressed(event){


                var key = event.target.value;


                axios.get("https://api.spotify.com/v1/search?q="+key+"&type=track")
                    .then(response => {
                        this.newSet = response.data.tracks.items;
                        console.log(this.newSet)
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })

                //this.newSet = JSON.stringify(this.newSet);
                this.$emit('newDataset',this.newSet);

            }
        }
    }
</script>

<style>
    #app {

    }
</style>