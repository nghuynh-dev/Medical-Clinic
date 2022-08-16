<?php

namespace Database\Seeders;

use App\Models\Patient;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Patient::create(["user_id" => 3, "gender" => "Male", "age" => 26, "weight" => 55, "problem" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise "]);
        Patient::create(["user_id" => 3, "gender" => "Male", "age" => 26, "weight" => 55, "problem" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise "]);
        Patient::create(["user_id" => 3, "gender" => "Male", "age" => 26, "weight" => 55, "problem" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise "]);
        Patient::create(["user_id" => 4, "gender" => "Female", "age" => 36, "weight" => 45, "problem" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise "]);
        Patient::create(["user_id" => 5, "gender" => "Female", "age" => 46, "weight" => 65, "problem" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise "]);
        Patient::create(["user_id" => 6, "gender" => "Male", "age" => 56, "weight" => 60, "problem" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise "]);
    }
}
