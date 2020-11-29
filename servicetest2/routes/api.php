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

Route::get('/info','RestfulController@getinfo'); //get data
Route::get('/info/{id}','RestfulController@getinfoByid'); 
Route::post('/info','RestfulController@createinfo'); //create data
Route::put('/info/{id}','RestfulController@updateinfo'); //update data
Route::delete('/info/{id}','RestfulController@deleteinfo'); //update data
