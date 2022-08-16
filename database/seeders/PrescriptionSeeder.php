<?php

namespace Database\Seeders;

use App\Models\Prescription;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PrescriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Prescription::create(["medicine" => "Aspirin", "doge" => "Morning, Evening", "days" => 3, "patient_id" => 3]);
        Prescription::create(["medicine" => "Panadol", "doge" => "Afternoon", "days" => 5, "patient_id" => 3]);
        Prescription::create(["medicine" => "Efferalgan", "doge" => "Morning, Afternoon", "days" => 3, "patient_id" => 3]);
        Prescription::create(["medicine" => "Prospan", "doge" => "Afternoon", "days" => 7, "patient_id" => 3]);
        Prescription::create(["medicine" => "Aspirin", "doge" => "Morning, Evening", "days" => 3, "patient_id" => 4]);
        Prescription::create(["medicine" => "Panadol", "doge" => "Afternoon", "days" => 5, "patient_id" => 4]);
        Prescription::create(["medicine" => "Efferalgan", "doge" => "Morning, Afternoon", "days" => 3, "patient_id" => 5]);
        Prescription::create(["medicine" => "Prospan", "doge" => "Afternoon", "days" => 7, "patient_id" => 6]);

    }
}
