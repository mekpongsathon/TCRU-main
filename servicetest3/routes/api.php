<?php

use Illuminate\Http\Request;
// use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Input;
use App\Http\Requests ;
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
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::get('/register/{username}','RegisterController@getCustomerByUsername'); 
    Route::post('/register','RegisterController@createcustomer'); //create data
    Route::get('/product','ProductController@getproduct'); //get data
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('user-profile', 'AuthController@userProfile');
});




// Route::get('/info/{id}','RestfulController@getinfoByid'); 
// Route::get('/info/{id}','RestfulController@getinfoByid'); 
// Route::get('/register','RegisterController@getcustomer'); //get data








// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');
