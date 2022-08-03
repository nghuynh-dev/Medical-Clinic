<?php

namespace App\Services;

use App\Models\Doctor;

class DoctorServices
{
    public function getDoctor()
    {
        return Doctor::all();
    }
}
