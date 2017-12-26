<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/addProduct',[

    'uses'=>'ProductController@postProduct'

]);

Route::get('/getProducts',[

    'uses'=>'ProductController@getProducts'
]);

Route::get('/getProduct/{id}',[

    'uses'=>'ProductController@getProduct'
]);


Route::put('/editItem/{id}',[

    'uses'=>'ProductController@putProduct'
]);


Route::delete('/deleteProduct/{id}',[

    'uses'=>'ProductController@deleteItem'
]);


