<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            DoctorSeeder::class,
            RoomSeeder::class,
            ReviewSeeder::class,
            UserSeeder::class,
            PatientSeeder::class,
            PrescriptionSeeder::class,
            BookingSeeder::class,
        ]);
    }
}
