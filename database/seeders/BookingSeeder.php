<?php

namespace Database\Seeders;

use App\Models\Booking;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Booking::create(["patient_id" => "5", "doctor_id" => "6", "room_id" => 6, "date" => "2022-08-11", "status" => 0]);
        Booking::create(["patient_id" => "5", "doctor_id" => "4", "room_id" => 6, "date" => "2022-08-12", "status" => 1]);
        Booking::create(["patient_id" => "1", "doctor_id" => "5", "room_id" => 5, "date" => "2022-08-13", "status" => 1]);
        Booking::create(["patient_id" => "2", "doctor_id" => "6", "room_id" => 4, "date" => "2022-08-14", "status" => 2]);
        Booking::create(["patient_id" => "6", "doctor_id" => "1", "room_id" => 3, "date" => "2022-08-15", "status" => 0]);
        Booking::create(["patient_id" => "3", "doctor_id" => "2", "room_id" => 2, "date" => "2022-08-16", "status" => 1]);
        Booking::create(["patient_id" => "4", "doctor_id" => "3", "room_id" => 1, "date" => "2022-08-17", "status" => 2]);

    }
}
