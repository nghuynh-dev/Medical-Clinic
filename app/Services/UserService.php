<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function getUser()
    {
        return auth('sanctum')->user();
    }
    public function getListUser()
    {
        $user = User::all();

        return $user;
    }
}
