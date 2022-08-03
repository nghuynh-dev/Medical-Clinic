<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;
use App\Services\ReviewService;

class ReviewController extends Controller
{
    protected $reviewService;
    public function __construct(ReviewService $reviewService)
    {
        $this->reviewService = $reviewService;
    }
    public function index()
    {
        return $this->reviewService->getReview();
    }
    public function create()
    {
        //
    }
    public function store(StoreReviewRequest $request)
    {
        //
    }
    public function show(Review $review)
    {
        //
    }
    public function edit(Review $review)
    {
        //
    }
    public function update(UpdateReviewRequest $request, Review $review)
    {
        //
    }
    public function destroy(Review $review)
    {
        //
    }
}
