<?php

namespace App\Services;

use App\Models\Prescription;

class PrescriptionService
{
    public function getList()
    {
        return Prescription::all();
    }
    public function store($data)
    {
        return Prescription::create([
           'booking_id' => $data['booking_id'],
            'medicine' => $data['medicine'],
            'doge' => $data['doge'],
            'days' => $data['days'],
        ]);
    }
    public function detail($id)
    {
        return Prescription::query()
//            ->leftJoin('bookings', 'prescriptions.booking_id', 'bookings.id')
//            ->leftJoin('user', 'bookings.user_id', 'user.id')
//            ->leftJoin('doctors', 'doctors.id', 'bookings.doctor_id')
            ->where('booking_id', $id)
            ->get();
    }
}
