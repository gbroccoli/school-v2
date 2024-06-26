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

    public function login(Request $request)
	{
		if (Auth::check()) {
			return response()->json(['authorization'=>true]);
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

	public function signout(Request $request): \Illuminate\Http\JsonResponse
	{
		Auth::logout();

		$request->session()->invalidate();

		$request->session()->regenerateToken();

		return response()->json(['msg' => 'Выход выполнен успешно']);
	}
}
