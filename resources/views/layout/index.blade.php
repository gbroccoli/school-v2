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

		@php
		$user = Auth::user();

        if (empty($user) != 1) {
            $user = [
            	"id" => $user->id,
            	"surname" => $user->surname,
            	"name" => $user->name,
            	"avatar" => $user->avatar
			];
        }

		@endphp

        <header class="flex-[0_0_auto] py-[15px]">
            <div class="container mx-auto flex justify-between items-center">
				<h1 class="logo font-bold font-[IBM_Plex_Sans_Condensed] text-[32px]">IT Штаб-квартира</h1>
				<profile-menu users='@json($user)'></profile-menu>
			</div>
        </header>

        <div class="flex-[1_0_auto]">
            <div class="container mx-auto">
                @yield('main')
            </div>
        </div>

        <footer class="flex-[0_0_auto]">
			<div class="mx-auto container text-center py-[7.5px]">
				2022 - {{date("Y")}} broccoli
			</div>
		</footer>

    </div>
    @vite('resources/ts/app.ts')
</body>
</html>
