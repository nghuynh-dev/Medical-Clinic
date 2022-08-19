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
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'testasdasd', "status" => 0, 'doctor_id' => 1, 'room_id'=> 1, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 35, "weight" => 60, "date" => "2022-08-11", "problem" => 'adasdff', "status" => 1, 'doctor_id' => 2, 'room_id'=> 1, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 45, "weight" => 60, "date" => "2022-08-13", "problem" => 'tasdsadfsadffst', "status" => 2, 'doctor_id' => 3, 'room_id'=> 2, 'user_id' =>3]);
        Booking::create(["gender" => 0, "age" => 25, "weight" => 60, "date" => "2022-08-15", "problem" => 'tesadasdfgst', "status" => 1, 'doctor_id' => 4, 'room_id'=> 3, 'user_id' =>4]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-17", "problem" => 'tesdgasdfst', "status" => 2, 'doctor_id' => 5, 'room_id'=> 2, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 65, "weight" => 60, "date" => "2022-08-22", "problem" => 'teasasdfdfst', "status" => 0, 'doctor_id' => 6, 'room_id'=> 4, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 55, "weight" => 60, "date" => "2022-08-01", "problem" => 'tesasgt', "status" => 0, 'doctor_id' => 7, 'room_id'=> 5, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 15, "weight" => 60, "date" => "2022-08-12", "problem" => 'test', "status" => 1, 'doctor_id' => 8, 'room_id'=> 6, 'user_id' =>5]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'tegsasst', "status" => 2, 'doctor_id' => 9, 'room_id'=> 5, 'user_id' =>4]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'testasd', "status" => 0, 'doctor_id' => 1, 'room_id'=> 1, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 35, "weight" => 60, "date" => "2022-08-11", "problem" => 'adfasd', "status" => 1, 'doctor_id' => 2, 'room_id'=> 1, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 45, "weight" => 60, "date" => "2022-08-13", "problem" => 'tasdgfasfdt', "status" => 2, 'doctor_id' => 3, 'room_id'=> 2, 'user_id' =>3]);
        Booking::create(["gender" => 0, "age" => 25, "weight" => 60, "date" => "2022-08-15", "problem" => 'tesadsdfgst', "status" => 1, 'doctor_id' => 4, 'room_id'=> 3, 'user_id' =>4]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-17", "problem" => 'tesasdfdgst', "status" => 2, 'doctor_id' => 5, 'room_id'=> 2, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 65, "weight" => 60, "date" => "2022-08-22", "problem" => 'teasasdfdfst', "status" => 0, 'doctor_id' => 6, 'room_id'=> 4, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 55, "weight" => 60, "date" => "2022-08-01", "problem" => 'tesasdfasgt', "status" => 0, 'doctor_id' => 7, 'room_id'=> 5, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 15, "weight" => 60, "date" => "2022-08-12", "problem" => 'teasdfst', "status" => 1, 'doctor_id' => 8, 'room_id'=> 6, 'user_id' =>5]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'tegsasst', "status" => 2, 'doctor_id' => 9, 'room_id'=> 5, 'user_id' =>4]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'test', "status" => 0, 'doctor_id' => 1, 'room_id'=> 1, 'user_id' =>6]);
        Booking::create(["gender" => 0, "age" => 36, "weight" => 60, "date" => "2022-08-11", "problem" => 'adf', "status" => 1, 'doctor_id' => 2, 'room_id'=> 1, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 45, "weight" => 60, "date" => "2021-08-13", "problem" => 'tasdgfst', "status" => 2, 'doctor_id' => 3, 'room_id'=> 2, 'user_id' =>3]);
        Booking::create(["gender" => 0, "age" => 25, "weight" => 60, "date" => "2022-08-19", "problem" => 'tesadgst', "status" => 1, 'doctor_id' => 4, 'room_id'=> 3, 'user_id' =>4]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-19", "problem" => 'tesdgst', "status" => 2, 'doctor_id' => 5, 'room_id'=> 2, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 65, "weight" => 60, "date" => "2022-08-22", "problem" => 'teasdfst', "status" => 0, 'doctor_id' => 7, 'room_id'=> 4, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 55, "weight" => 60, "date" => "2022-08-01", "problem" => 'tesasgt', "status" => 0, 'doctor_id' => 8, 'room_id'=> 5, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 15, "weight" => 60, "date" => "2022-08-12", "problem" => 'test', "status" => 1, 'doctor_id' => 9, 'room_id'=> 6, 'user_id' =>5]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'tegsasst', "status" => 2, 'doctor_id' => 2, 'room_id'=> 5, 'user_id' =>4]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'test', "status" => 0, 'doctor_id' => 4, 'room_id'=> 1, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 35, "weight" => 60, "date" => "2022-08-11", "problem" => 'adf', "status" => 1, 'doctor_id' => 6, 'room_id'=> 5, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 45, "weight" => 60, "date" => "2022-08-13", "problem" => 'tasdgfst', "status" => 2, 'doctor_id' => 3, 'room_id'=> 2, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 25, "weight" => 60, "date" => "2022-08-15", "problem" => 'tesadgst', "status" => 1, 'doctor_id' => 4, 'room_id'=> 3, 'user_id' =>4]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-17", "problem" => 'tesdgst', "status" => 2, 'doctor_id' => 5, 'room_id'=> 2, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 65, "weight" => 60, "date" => "2022-08-22", "problem" => 'teasdfst', "status" => 0, 'doctor_id' => 6, 'room_id'=> 4, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 55, "weight" => 60, "date" => "2022-08-01", "problem" => 'tesasgt', "status" => 0, 'doctor_id' => 7, 'room_id'=> 5, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 15, "weight" => 60, "date" => "2022-08-12", "problem" => 'test', "status" => 1, 'doctor_id' => 8, 'room_id'=> 6, 'user_id' =>5]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'tegsasst', "status" => 2, 'doctor_id' => 9, 'room_id'=> 5, 'user_id' =>4]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'test', "status" => 0, 'doctor_id' => 1, 'room_id'=> 1, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 35, "weight" => 60, "date" => "2022-08-11", "problem" => 'adf', "status" => 1, 'doctor_id' => 2, 'room_id'=> 1, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 45, "weight" => 60, "date" => "2022-08-13", "problem" => 'tasdgfst', "status" => 2, 'doctor_id' => 3, 'room_id'=> 2, 'user_id' =>3]);
        Booking::create(["gender" => 0, "age" => 25, "weight" => 60, "date" => "2022-08-15", "problem" => 'tesadgst', "status" => 1, 'doctor_id' => 4, 'room_id'=> 3, 'user_id' =>4]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-17", "problem" => 'tesdgst', "status" => 2, 'doctor_id' => 5, 'room_id'=> 2, 'user_id' =>5]);
        Booking::create(["gender" => 0, "age" => 65, "weight" => 60, "date" => "2022-08-22", "problem" => 'teasdfst', "status" => 0, 'doctor_id' => 6, 'room_id'=> 4, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 55, "weight" => 60, "date" => "2022-08-01", "problem" => 'tesasgt', "status" => 0, 'doctor_id' => 7, 'room_id'=> 5, 'user_id' =>2]);
        Booking::create(["gender" => 1, "age" => 15, "weight" => 60, "date" => "2022-08-12", "problem" => 'test', "status" => 1, 'doctor_id' => 8, 'room_id'=> 6, 'user_id' =>5]);
        Booking::create(["gender" => 1, "age" => 25, "weight" => 60, "date" => "2022-08-12", "problem" => 'tegsasst', "status" => 2, 'doctor_id' => 9, 'room_id'=> 5, 'user_id' =>4]);
    }
}
