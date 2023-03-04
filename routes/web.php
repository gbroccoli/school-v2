<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use \App\Http\Controllers\AuthService;

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

Route::view('/', 'index')->name('index');

Route::group(['prefix'=>'auth'], function () {
//	Route::get("/register", [\App\Http\Controllers\RegisterController::class, 'index'])->name("register");
	Route::post("/register", [\App\Http\Controllers\RegisterController::class, 'store'])->name('singup');

	Route::get('/signin', [AuthService::class, "viewLogin"])->name('login');
	Route::post('/signin', [\App\Http\Controllers\AuthService::class, 'login']);
});

Route::group(['prefix'=>'user'], function () {
	Route::get("/profile", [\App\Http\Controllers\UserController::class, 'index'])->name('profile');
	Route::get("/setting")->name("setting");
});

Route::get('/email/verify', function () {
	return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

Route::post('/email/verification-notification', function (Request $request) {
	$request->user()->sendEmailVerificationNotification();

	return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
	$request->fulfill();

	return redirect('/');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::get("/test", [\App\Http\Controllers\TetsConscontoller\ControllersTest::class, "Tests"]);
