<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	public function up() : void
    {
        Schema::create('users', function (Blueprint $table) {
            $table
				->id();
            $table
				->string('surname');
            $table
				->string('name');
            $table
				->string('patronymic')
				->default('');
			$table
				->string('course_group');
            $table
				->string('email')
				->unique();
            $table
				->timestamp('email_verified_at')
				->nullable();
            $table
				->string('password');
            $table
				->rememberToken();
			$table
				->string('avatar')
				->default("default.png")
				->nullable();
            $table
				->timestamps();
			$table
				->string("token", 50)
				->unique();
        });
    }

    public function down() : void
    {
        Schema::dropIfExists('users');
    }
};
