<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
	public function index(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
	{
		return view('auth.register');
	}

    public function register(Request $request)
	{
		$data = $request->validate([
			"surname" => ["required", "string"],
			"name" => ["required", "string"],
			"email" => ["required", "email", "string"],
			"password" => ["required", "min:8"],
			"group_id" => ["required"],
			"course_group" => ["required"]
		]);

//		dd($data);

		$user = User::create([
			"surname" => $data['surname'],
			"name" => $data["name"],
			"email" => $data["email"],
			"password" => $data["password"],
			"group_id" => $data["group_id"],
			"course_group" => $data["course_group"]
		]);

		if ($user)
		{
			event(new Registered($user));
			auth("web")->login($user);
			return to_route('verification.notice');
		}
	}
}
