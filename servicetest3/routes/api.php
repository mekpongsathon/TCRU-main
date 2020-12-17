<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// use App\Http\Requests ;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::get('/register','RegisterController@getcustomer'); //get data
    Route::get('/register/{username}','RegisterController@getCustomerByUsername'); 
    Route::post('/register','RegisterController@createcustomer'); //create data
    Route::get('/product','ProductController@getproduct'); //get data
    // Route::post('register', 'AuthController@register'); jwt register
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('user-profile', 'AuthController@userProfile');
});




// use Illuminate\Support\Facades\Redirect;
// use Illuminate\Support\Facades\Input;// use Illuminate\Routing\Route;









