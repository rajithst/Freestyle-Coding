<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Music APP</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><router-link to="/">HOME</router-link></li>
                    <li><router-link to="/about">ABOUT</router-link></li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="https://github.com/rajithst" target="_blank">FORK ON GITHUB</a></li>
                </ul>
            </div>
        </div>
    </nav>




</template>

<script>

    export default {

    }
</script>

<style>

</style>