<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthService extends Controller
{
	public function viewLogin()
	{
		if (Auth::check()) {
			return to_route('profile');
		}

		return view('auth.login');
	}

    public function login(Request $request): \Illuminate\Http\RedirectResponse
	{
		if (Auth::check()) {
			return to_route('profile');
		}

		$form = $request->only([
			'email',
			'password'
		]);

		$remember_me = $request->remember_me;

		if (Auth::attempt($form, $remember_me)) {
			$request->session()->regenerate();

			return to_route('/');
		}

		return to_route('login')->withErrors([
			'msg' => 'Неудачная попытка'
		]);
	}

	public function signout(Request $request)
	{
		Auth::logout();

		$request->session()->invalidate();

		$request->session()->regenerateToken();

		return response()->json(['message' => 'Выход выполнен успешно']);
	}
}
