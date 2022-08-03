<?php

namespace App\Services;

use App\Models\Review;

class ReviewService
{
    public function getReview()
    {
        $value = 10;
        return Review::query()->take($value)->get();
    }
}
