<?php

namespace App\Services;

use App\Models\User;
use http\Env\Request;
use Illuminate\Support\Facades\Hash;

class AuthenticationService
{
    public function login($request)
    {
        $user = User::where('username', $request->username)->first();
        if ($request->username == '' || $request->password == '') {
            return response()->json(['message' => 'Username or password can not be null '], 404);
        }
        if (!$user) {
            return response()->json(['message' => 'Username or password is incorrect. Please try again'], 404);
        }
        if ((!Hash::check($request->password, $user->password))) {
            return response()->json(['message' => 'Username or password is incorrect. Please try again'], 404);
        }
        $token = $user->createToken('authToken')->plainTextToken;
        return response()->json(
            [
                'message' => 'Login Success ! ',
                'username' => $user->username,
                'admin' => $user->admin,
                'token' => $token,
                'token_type' => 'Bearer',
            ],
        );
    }
    public function logout()
    {
        $user = request()->user();
        $user->tokens()->delete();
        return response()->json(['message' => 'Logout Success ! '], 200);
    }
    public function register($data)
    {
        $checkUser = User::where('username', $data->username)->count();
        if ($checkUser > 0) {
            return response()->json(['message' => 'Username has be used'], 404);
        } else {
            return User::create([
                'patient_name' => $data['patient_name'],
                'phone' => $data['phone'],
                'email' => $data['email'],
                'username' => $data['username'],
                'password' => bcrypt($data['password']),
            ]);
        }
    }
}
