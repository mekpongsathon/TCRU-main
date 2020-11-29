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

// Route::get('/register','RegisterController@getcustomer'); //get data
Route::get('/register/{username}','RegisterController@getCustomerByUsername'); 




Route::post('/register','RegisterController@createcustomer'); //create data
// Route::get('/info/{id}','RestfulController@getinfoByid'); 
Route::get('/product','ProductController@getproduct'); //get data
// Route::get('/info/{id}','RestfulController@getinfoByid'); 








// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');
