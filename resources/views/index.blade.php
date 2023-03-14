@extends('layout.index')

@section('title', '')


@section('main')
	<div class="flex justify-between">
		<div>
			<div class="navigator">
				<nav>
					<ul class="navigator-list bg-gray-300 p-4 space-y-3.5">
						<li class="navigator-item"><a href="#">Научная работа</a></li>
						<li class="navigator-item relative flex justify-between"><a href="#" class="block">Учебная работа</a><arrow-right></arrow-right>
							<ul class="navigator-list navigator-list-2 hidden absolute flex-col block right-[-120%] top-0 bg-gray-300 p-4 space-y-3.5">
								<li><a href="#">Лекционный материал</a></li>
								<li><a href="#">Практические задания</a></li>
							</ul>
						</li>
						<li class="navigator-item"><a href="#">Методические указания</a></li>
						<li class="navigator-item"><a href="#">О сайте</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
@endsection
