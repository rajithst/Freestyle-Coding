<template>
    <div class="container">
        <div class="fb-profile">
            <img align="left" class="fb-image-lg" src="https://lk.linkedin.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAy2AAAAJGE4NjA3M2FkLTY3N2QtNDJjMy1hNzI5LWI1ODBhNmMwOTNhNw.jpg" alt="Profile image example"/>
            <img align="left" class="fb-image-profile thumbnail" src="https://avatars2.githubusercontent.com/u/14908097?v=3&s=460"/>
            <div class="fb-profile-text">
                <h1>Rajith Thennakoon</h1>
                <p>University of Colombo School of Computing</p>
            </div>
        </div>
    </div>
</template>

<script>




</script>

<style>


    .fb-profile img.fb-image-lg{
        z-index: 0;
        width: 100%;
        margin-bottom: 10px;
    }

    .fb-image-profile
    {
        margin: -90px 10px 0px 50px;
        z-index: 9;
        width: 20%;
    }

    @media (max-width:768px)
    {

        .fb-profile-text>h1{
            font-weight: 700;
            font-size:16px;
        }

        .fb-image-profile
        {
            margin: -45px 10px 0px 25px;
            z-index: 9;
            width: 20%;
        }
    }


</style>