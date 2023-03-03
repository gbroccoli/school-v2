<?php

namespace App\Http\Controllers;

use Couchbase\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
	{
		if (Auth::check())
		{

		}
	}
}
