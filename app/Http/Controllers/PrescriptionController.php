<?php

namespace App\Http\Controllers;

use App\Models\Prescription;
use App\Http\Requests\StorePrescriptionRequest;
use App\Http\Requests\UpdatePrescriptionRequest;
use App\Services\PrescriptionService;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{
    protected $prescriptionService;
    public function __construct(PrescriptionService $prescriptionService)
    {
        $this->prescriptionService = $prescriptionService;
    }
    public function index()
    {
        return $this->prescriptionService->getList();
    }

    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->prescriptionService->store($request);
    }
    public function show($id)
    {
        return $this->prescriptionService->detail($id);
    }
    public function edit(Prescription $prescription)
    {
        //
    }
    public function update(UpdatePrescriptionRequest $request, Prescription $prescription)
    {
        //
    }
    public function destroy(Prescription $prescription)
    {
        //
    }
}
