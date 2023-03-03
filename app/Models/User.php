<?php

namespace App\Models;

 use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

 /**
  * @method static create(array $array)
  */
 class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
		'surname',
        'name',
		'patronymic',
        'email',
		'group_id',
		'course_group',
        'password',
		"token"
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

	public function Group()
	{
		return $this->belongsTo();
	}

	 public function roles(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 {
		 return $this->belongsToMany(Role::class, 'user_roles');
	 }

	 public function isAdmin(): bool
	 {
		 return $this->roles()->where('name', 'admin')->exists();
	 }
}
