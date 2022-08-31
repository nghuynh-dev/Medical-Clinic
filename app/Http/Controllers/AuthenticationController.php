<?php

namespace App\Http\Controllers;

use App\Services\AuthenticationService;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    private AuthenticationService $authenticationService;

    public function __construct(AuthenticationService $authenticationService)
    {
        $this->AuthenticationService = $authenticationService;
    }
    public function login(Request $request)
    {
        return $this->AuthenticationService->login($request);
    }
    public function logout()
    {
        return $this->AuthenticationService->logout();
    }
    public function register(Request $request)
    {
        return $this->AuthenticationService->register($request);
    }
}
