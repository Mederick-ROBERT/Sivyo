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
          'mondayLunch' => ['id' => 1, 'data' => ''],
          'mondayDinner' => ['id' => 2, 'data' => ''],
          'tuesdayLunch' => ['id' => 3, 'data' => ''],
          'tuesdayDinner' => ['id' => 4, 'data' => ''],
          'wednesdayLunch' => ['id' => 5, 'data' => ''],
          'wednesdayDinner' => ['id' => 6, 'data' => ''],
          'thursdayLunch' => ['id' => 7, 'data' => ''],
          'thursdayDinner' => ['id' => 8, 'data' => ''],
          'fridayLunch' => ['id' => 9, 'data' => ''],
          'fridayDinner' => ['id' => 10, 'data' => ''],
          'saturdayLunch' => ['id' => 11, 'data' => ''],
          'saturdayDinner' => ['id' => 12, 'data' => ''],
          'sundayLunch' => ['id' => 13, 'data' => ''],
          'sundayDinner' => ['id' => 14, 'data' => ''],
        ];

        $data['meals'] = json_encode($meals);

        MealPlan::create($data);
    }
}
