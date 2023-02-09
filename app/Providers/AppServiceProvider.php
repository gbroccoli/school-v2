<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
		VerifyEmail::toMailUsing(function ($notifiable, $url) {
			return (new MailMessage)
				->subject("Письмо подтверждения")
				->line("Если вы получили данное письмо, то вы были зарегестрированны\n администратором платформы")
				->action('Подтвердить эл.адрес', $url);
		});
    }
}
