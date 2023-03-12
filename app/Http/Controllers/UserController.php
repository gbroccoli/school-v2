<?php

namespace App\Http\Controllers;

use App\Models\User;
use Couchbase\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(): \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse
	{
		if (Auth::check())
		{
			return view('account.index');
		}

		return to_route('signin');
	}

	public function getProfilePhoto(User $userID): \Symfony\Component\HttpFoundation\BinaryFileResponse
	{
		$photoPath = $userID->avatar;
		return response()->file(storage_path("app/" . $userID . "/" . $photoPath));
	}
}
