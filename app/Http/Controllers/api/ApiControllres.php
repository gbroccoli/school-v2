<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ApiControllres extends Controller
{
    public function users(Request $request) {
		return User::where("name", "LIKE", "%{$request->search}%")->get();
	}

	public function material(Request $request) {
		if ($request->_pass == config("PASSWORD")) {
			return 0;
		}
	}
}
