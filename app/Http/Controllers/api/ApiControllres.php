<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ApiControllres extends Controller
{
    public function users() {
		return User::all();
	}
}
