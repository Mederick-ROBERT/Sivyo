<?php

namespace App\Http\Controllers\Utils;

use App\Http\Controllers\Controller;
use App\Models\MealPlan;
use Carbon\Carbon;

class MealPlanCreator extends Controller
{
    public static function createMealPlan(string $user_id): void
    {
        $data = [];

        $data['user_id'] = $user_id;

        $data['week_number'] = Carbon::now()->week;

        $meals = [
          'mondayLunch' => '',
          'mondayDinner' => '',
          'tuesdayLunch' => '',
          'tuesdayDinner' => '',
          'wednesdayLunch' => '',
          'wednesdayDinner' => '',
          'thursdayLunch' => '',
          'thursdayDinner' => '',
          'fridayLunch' => '',
          'fridayDinner' => '',
          'saturdayLunch' => '',
          'saturdayDinner' => '',
          'sundayLunch' => '',
          'sundayDinner' => '',
        ];

        $data['meals'] = json_encode($meals);

        MealPlan::create($data);
    }
}
