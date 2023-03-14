@extends('layout.index')

@section('title', '')


@section('main')
{{--	<div class="flex justify-between">--}}
{{--		<div>--}}
{{--			<div class="navigator">--}}
{{--				<nav>--}}
{{--					<ul class="navigator-list bg-gray-300 p-4 space-y-3.5">--}}
{{--						<li class="navigator-item"><a href="#">Научная работа</a></li>--}}
{{--						<li class="navigator-item relative flex justify-between"><a href="#" class="block">Учебная работа</a><arrow-right></arrow-right>--}}
{{--							<ul class="navigator-list navigator-list-2 hidden absolute flex-col block right-[-120%] top-0 bg-gray-300 p-4 space-y-3.5">--}}
{{--								<li><a href="#">Лекционный материал</a></li>--}}
{{--								<li><a href="#">Практические задания</a></li>--}}
{{--							</ul>--}}
{{--						</li>--}}
{{--						<li class="navigator-item"><a href="#">Методические указания</a></li>--}}
{{--						<li class="navigator-item"><a href="#">О сайте</a></li>--}}
{{--					</ul>--}}
{{--				</nav>--}}
{{--			</div>--}}
{{--		</div>--}}
{{--	</div>--}}

	<div class="container mx-auto">
		<div class="last-work">
			<div class="h-[550px] bg-gray-600 rounded-md flex items-center justify-center">
				<h2 class="text-white font-bold text-[64px]">Последняя работа</h2>
			</div>
		</div>
	</div>

	<div class="container mx-auto mt-12">
		<h2 class="font-bold text-[32px]">Основные темы</h2>
		<div class="flex justify-between items-center mt-2.5">
			<div class="w-[400px] h-[400px] bg-gray-600 rounded-lg"></div>
			<div class="w-[400px] h-[400px] bg-gray-600 rounded-lg"></div>
			<div class="w-[400px] h-[400px] bg-gray-600 rounded-lg"></div>
		</div>
	</div>


@endsection
