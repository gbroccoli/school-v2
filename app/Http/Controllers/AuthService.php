<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthService extends Controller
{
	public function viewLogin(): \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse
	{
		if (Auth::check()) {
			return to_route('profile');
		}

		return view('auth.login');
	}

    public function login(Request $request) {
		if (Auth::check()) {
			return to_route('profile');
		}

		$form = $request->only([
			'email',
			'password'
		]);

		$remember = $request->remember;

		if (Auth::attempt($form, $remember)) {
			$request->session()->save();
		}

		return to_route('login')->withErrors([
			'msg' => 'Неудачная попытка'
		]);
	}
}
