<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthenticationController::class, 'login']);
Route::post('/register', [AuthenticationController::class, 'register']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/logout', [AuthenticationController::class, 'logout']);
    Route::get('/user_token', [UserController::class, 'getUserByToken']);
    Route::resource('/booking', BookingController::class);
    Route::resource('/patient', PatientController::class);
});


Route::resource('/doctor', DoctorController::class);
Route::resource('/review', ReviewController::class);
