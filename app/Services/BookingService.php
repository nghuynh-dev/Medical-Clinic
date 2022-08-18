<?php

namespace App\Services;

use App\Http\Resources\BookingCollection;
use App\Models\Booking;
use App\Models\Patient;
use App\Models\User;
use Carbon\Carbon;

class BookingService
{
    public function getBooking()
    {
        return Booking::sortDate();
//        return 'adsf';
    }
    public function store($data)
    {
        $user_id = auth('sanctum')->user();
        return Booking::create([
            'user_id' => $user_id->id,
            'date' => $data['date'],
            'status' => 0,
            'gender' => $data['gender'],
            'age' => $data['age'],
            'weight' => $data['weight'],
            'problem' => $data['problem'],
            'doctor_id' => $data['doctor_id'],
            'room_id' => $data['room_id']
        ]);
    }
    public function count()
    {
        $pending = Booking::pending();
        $today = Booking::today();
        $total = Booking::total();
        $user = User::query()->count();
        return response()->json([
            'pending' => $pending,
            'today' => $today,
            'total' => $total,
            'user' => $user
        ]);
    }
}
