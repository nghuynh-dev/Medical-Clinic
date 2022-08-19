<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use App\Services\BookingService;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    protected $bookingService;
    public function __construct(BookingService $bookingService)
    {
        $this->bookingService = $bookingService;
    }
    public function index()
    {
        return $this->bookingService->getBooking();
//        return 'ads';
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->bookingService->store($request);
    }
    public function show(Booking $booking)
    {
        //
    }
    public function edit($id)
    {
        //
    }
    public function update(UpdateBookingRequest $request, Booking $booking)
    {
        //
    }
    public function destroy(Booking $booking)
    {
        //
    }
    public function count()
    {
        return $this->bookingService->count();
    }
    public function approved($id)
    {
        return $this->bookingService->approved($id);
    }
    public function decline($id)
    {
        return $this->bookingService->decline($id);
    }
}
