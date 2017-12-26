<?php
/*
Plugin Name: linkedin_profile_widget
Plugin URI: https://wordpress.org/
Description: show your Linkedin profile 
Version: 1.0.0
Author: Rajith Thennakoon
Author URI:https://rajith681.wordpress.com
*/

require_once(plugin_dir_path(__FILE__).'/scripts/lkd_main_script.php');
require_once(plugin_dir_path(__FILE__).'/scripts/lkd_main_class.php');

function register_lkd_widget(){

    register_widget('Linkedin_profile_Widget');
}

add_action( 'widgets_init','register_lkd_widget');