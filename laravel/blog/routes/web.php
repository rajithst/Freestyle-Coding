<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('users',['uses'=>'UserController@index'] );

Route::get('home',[
    'uses'=>'UserController@getHome',
    'as'=>'home'
])->middleware('auth');



Route::get('signout',[
    'uses'=>'UserController@logout',
    'as'=>'signout'
] );



Route::post('register',[

    'uses'=>'UserController@RegisterUser',
    'as' => 'signup'

]);

Route::post('login',[

    'uses'=>'UserController@LoginUser',
    'as' => 'signin'

]);




