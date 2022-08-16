<?php

namespace Database\Seeders;

use App\Models\Invoice;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InvoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Invoice::create(["price" => 15.5, "date" => "2022-08-13 14:00:00", "doctor_id" => 5, "prescription_id" => 1, "patient_id" => 3]);
    }
}
