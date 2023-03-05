<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')IT Штаб-квартира</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
	<meta name="csrf-token" content="{{ csrf_token() }}">
    @routes
</head>
<body>
    <div id="app" class="flex flex-col h-[100%]">

        <header class="flex-[0_0_auto] py-[15px] bg-green-900">
            <div class="container mx-auto flex justify-between items-center">
				<a href="/"><h1 class="logo font-bold font-[IBM_Plex_Sans_Condensed] text-[32px] text-white">IT Штаб-квартира</h1></a>
				@auth

					@php
						$user = Auth::user();

						$user = [
								"id" => $user->id,
								"surname" => $user->surname,
								"name" => $user->name,
								"avatar" => $user->avatar
							];

					@endphp

					<profile-menu users='@json($user)'></profile-menu>
				@endauth

				@guest
					<a href="{{route('login')}}" class="block text-white border px-[1.5rem] py-[0.5rem]">Войти</a>
				@endguest
			</div>
        </header>

        <div class="flex-[1_0_auto]">
            <div class="container mx-auto py-[35px]">
                @yield('main')
            </div>
        </div>

        <footer class="flex-[0_0_auto] bg-green-900 text-white">
			<div class="mx-auto container text-center py-[15px] flex justify-between items-start">
				<a href="/">IT Штаб-квартира</a>
				<div>
					©{{date("Y")}} broccoli
				</div>
			</div>
		</footer>

    </div>
    @vite('resources/ts/app.ts')
</body>
</html>
