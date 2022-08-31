<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'date',
        'status',
        'doctor_id',
        'room_id',
        'gender',
        'age',
        'weight',
        'problem',
    ];
    public function scopeDetail($query)
    {
        return $query
            ->leftJoin('user', 'user.id', 'bookings.user_id')
            ->leftJoin('doctors', 'doctors.id', 'bookings.doctor_id')
            ->select('bookings.*', 'doctors.name', 'user.patient_name', 'user.phone', 'doctors.edu')
            ->get();
    }
    public function scopePending($query)
    {
        return $query->where('bookings.status', 0)->count();
    }
    public function scopeToday($query)
    {
        $today = Carbon::now()->toDateString();
        return $query->where('bookings.date', $today)->count();
    }
    public function scopeTotal($query)
    {
        return $query->count();
    }
    public function scopeSortDate($query)
    {
        return $query
            ->leftJoin('user', 'user.id', 'bookings.user_id')
            ->leftJoin('doctors', 'doctors.id', 'bookings.doctor_id')
            ->leftJoin('rooms', 'rooms.id', 'bookings.room_id')
            ->orderBy('bookings.status')
            ->orderBy('bookings.date')
            ->orderBy('bookings.id')
            ->select('bookings.*', 'doctors.name', 'rooms.room_name', 'user.patient_name', 'user.phone')
            ->get();
    }
    public function scopeBookingOfUser($query, $request)
    {
        return $query
            ->leftJoin('doctors', 'doctors.id', 'bookings.doctor_id')
            ->leftJoin('rooms', 'rooms.id', 'bookings.room_id')
            ->leftJoin('user', 'user.id', 'bookings.user_id')
            ->orderBy('bookings.date', 'desc')
            ->select(
                'bookings.*',
                'doctors.name',
                'doctors.speciality',
                'rooms.room_name',
                'user.patient_name',
                'user.phone'
            )
            ->where('bookings.user_id', $request)->get();
    }
}
