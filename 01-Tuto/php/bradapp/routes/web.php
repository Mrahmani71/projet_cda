<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BooksController;
use App\Models\User;
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

Route::get('/dashboard', function () {
    $user_id = auth()->user()->id;
    $user = User::find($user_id);
    return view('dashboard')->with('books', $user->books);
})->middleware(['auth'])->name('dashboard');

Route::resource('books', BooksController::class)->middleware('auth')->except('show', 'index');

require __DIR__.'/auth.php';
