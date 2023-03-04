<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class RegisterController extends Controller
{
//	public function index(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
//	{
//		return view('auth.register');
//	}

    public function store(Request $request): \Illuminate\Http\RedirectResponse
	{
		$data = $request->validate([
			"surname" => ["required", "string"],
			"name" => ["required", "string"],
			"email" => ["required", "email", "string"],
			"password" => ["required", "min:8"],
			"group_id" => ["required"],
			"course_group" => ["required"]
		]);

		$user = User::create([
			"surname" => $data['surname'],
			"name" => $data["name"],
			"email" => $data["email"],
			"password" => Hash::make($data["password"]),
			"group_id" => $data["group_id"],
			"course_group" => $data["course_group"],
			"token" => rand(100, 100000)
		]);

		if ($user)
		{
			event(new Registered($user));
			auth("web")->login($user);
			Storage::createDirectory(Auth::id());
			return to_route('verification.notice');
		}

		return to_route("register");
	}
}
