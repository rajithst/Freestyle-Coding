<?php

function lkd_load_script(){

    wp_enqueue_style('lkd_main_style',plugins_url().'/linkedin_widget/css/style.css');

    wp_enqueue_script('lkd_main_script',plugins_url().'/linkedin_widget/js/mainscript.js');
    wp_enqueue_script('lkd_cdn_script','https://platform.linkedin.com/in.js');
    

}

add_action( 'wp_enqueue_scripts','lkd_load_script');