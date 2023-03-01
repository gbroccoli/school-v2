<?php

namespace App\Http\Controllers\TetsConscontoller;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ControllersTest extends Controller
{
    public function Tests()
	{
		$user = User::where("id", 5)->paginate(5);

		dd($user);
	}
}
