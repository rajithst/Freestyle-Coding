<?php

/**
 * Created by PhpStorm.
 * User: rajiii
 * Date: 9/9/2017
 * Time: 4:51 PM
 */
class Admin extends CI_Controller {

    public function index(){
    $this->load->view('Admin/dashboard');

    }

    public function AddPost(){
        $this->load->view('Admin/Add');

    }

}