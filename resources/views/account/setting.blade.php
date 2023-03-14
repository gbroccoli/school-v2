@extends('layout.index')

@section('title', "Настройка профиля | ")

@section("main")
<account-setting users='@json(Auth::user())'></account-setting>
@endsection
