<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListingController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/hello', function () {
//     return response('<h1>Hello World</h1>', 200)
//         ->header('Content-type', 'text/plain');
// });

// // req params
// Route::get('/post/{id}', function ($id) {

//     //For debuging
//     // dd($id);
//     // ddd($id);

//     return response('post'. $id);
// })->where('id', '[0-9]+');

// // req query
// // + install PHP Name Space Resolver
// Route::get('/search', function(Request $request) {
//     dd($request-> name);
// });



// Show all listings
Route::get('/', [ListingController::class, 'index']);


// SHow create form
Route::get('/listings/create', [ListingController::class, 'create']);

// save new listing to database
Route::post('/listings', [ListingController::class, 'store'] );

// Show edit Form
Route::get('/listings/{listing}/edit', [ListingController::class, 'edit']);

// Update a listing
Route::put('/listings/{listing}', [ListingController::class, 'update']);

// Delete a listing
Route::delete('/listings/{listing}', [ListingController::class, 'destroy']);

//Show single listing
Route::get('/listings/{listing}', [ListingController::class, 'show'] );