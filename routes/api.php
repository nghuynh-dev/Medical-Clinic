<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/booking/count', [BookingController::class, 'count']);
Route::post('/login', [AuthenticationController::class, 'login']);
Route::post('/register', [AuthenticationController::class, 'register']);
Route::get('/booking/{id}/approved', [BookingController::class, 'approved']);
Route::get('/booking/{id}/decline', [BookingController::class, 'decline']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/logout', [AuthenticationController::class, 'logout']);
    Route::get('/user_token', [UserController::class, 'getUserByToken']);
    Route::resource('/booking', BookingController::class);
});
Route::resource('/doctor', DoctorController::class);
Route::resource('/review', ReviewController::class);
