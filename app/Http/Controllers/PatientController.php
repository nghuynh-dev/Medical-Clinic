<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Http\Requests\StorePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use App\Services\PatientService;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    protected $patientService;
    public function __construct(PatientService $patientService)
    {
        $this->patientService = $patientService;
    }
    public function index()
    {
        //
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->patientService->store($request);
    }
    public function show(Patient $patient)
    {
        //
    }
    public function edit(Patient $patient)
    {
        //
    }
    public function update(UpdatePatientRequest $request, Patient $patient)
    {
        //
    }
    public function destroy(Patient $patient)
    {
        //
    }
}
