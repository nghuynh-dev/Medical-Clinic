<?php

namespace App\Services;

use App\Models\Booking;
use App\Models\User;
use Carbon\Carbon;

class BookingService
{
    public function getBooking()
    {
        return Booking::all();
    }
    public function store($data)
    {
        $sanctumUser = auth('sanctum')->user();
        $booking = Booking::create([
            'patient_id' => $sanctumUser->id,
            'date' => $data['date'],
            'status' => 0,
            'doctor_id' => $data['doctor_id'],
            'room_id' => $data['room_id']
        ]);
        return $booking;
    }
}
