<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

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

Route::controller(\App\Http\Controllers\RegisterController::class)->group(function (){
	Route::get("/register", "index")->name("register");
	Route::post("/register", "register");
});

Route::get("/login", function () {
	return view('auth.login');
})->name('login');

Route::get("/profile")->name("profile");

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
