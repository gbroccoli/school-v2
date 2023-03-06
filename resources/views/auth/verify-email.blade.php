@extends('layout.index')

@section('title', 'Подтверждение email | ')

@section('main')
	<h2>Подтверждение email</h2>

	<div>
		На ваш email {{Auth::user()->email}} выслоно письмо подтвержение
	</div>

	<a href="{{route('profile')}}">Перейти в профиль</a>
@endsection
