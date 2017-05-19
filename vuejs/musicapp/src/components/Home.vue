<template>

    <div>


        <div class="container">
            <div class="row">
                <form class="form-horizontal">
                    <fieldset>
                        <legend>Search Music here</legend>

                        <div class="col-md-8 col-md-offset-2">
                            <app-search :resList="results" @newDataset="results = $event"></app-search>

                        </div>
                    </fieldset>
                </form>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <app-result :myres="results"></app-result>
                </div>

            </div>
        </div>
    </div>



</template>

<script>

    import SearchArea from './SearchArea.vue';
    import ResultArea from './ResultArea.vue';
    export default {

        components:{
            'app-search':SearchArea,
            'app-result':ResultArea,
        },
        data(){
            return {
                results:[]
            }
        }
    }
</script>