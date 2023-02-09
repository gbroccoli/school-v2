@extends('layout.index')

@section('title', 'Регестрация')

@section('main')
<form action="/register" method="POST">
	@csrf
	<input type="text" name="surname" placeholder="surname">
	<input type="text" name="name" placeholder="name">
	<input type="email" name="email" placeholder="email">
	<input type="password" name="password" placeholder="password">
	<input type="number" name="group_id" placeholder="group_id">
	<input type="number" name="course_group" placeholder="course_group">

	<button>send</button>
</form>
@endsection
