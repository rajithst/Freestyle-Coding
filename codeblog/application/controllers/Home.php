<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		$this->load->view('home');
	}

	public function Login(){
	    $this->load->view('Login');
    }

    public function Register(){
        $this->load->view('Register');
    }
}
