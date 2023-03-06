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

    public function login(Request $request): \Illuminate\Http\JsonResponse
	{
		if (Auth::check()) {
			return response()->json(["msg"=>"Пользователь авторизирован"]);
		}

		$form = $request->only([
			'email',
			'password'
		]);

		$remember_me = $request->remember_me;

		if (Auth::attempt($form, $remember_me)) {
			$request->session()->regenerate();

			return response()->json(['authorization'=>true]);
		} else {
			return response()->json(['authorization'=>false]);
		}


	}

	public function signout(Request $request)
	{
		Auth::logout();

		$request->session()->invalidate();

		$request->session()->regenerateToken();

		return response()->json(['message' => 'Выход выполнен успешно']);
	}
}
