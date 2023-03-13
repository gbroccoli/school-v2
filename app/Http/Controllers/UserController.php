<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use JetBrains\PhpStorm\NoReturn;

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
		return response()->file(storage_path("app/" . $userID->id . "/" . $photoPath));
	}

	public function viewAccountSetting(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
	{
		return view('account.setting');
	}

	public function storeAccountSetting(Request $request)
	{
		dd($request->all());
	}

	public function profileOtherUser(User $userID): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
	{
		return view("account.accountOtherUser", compact("userID"));
	}
}
