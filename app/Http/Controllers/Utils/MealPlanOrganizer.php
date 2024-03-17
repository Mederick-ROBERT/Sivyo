<?php

namespace App\Http\Controllers\Utils;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use Carbon\Carbon;
use Carbon\CarbonPeriod;

class MealPlanOrganizer extends Controller
{
    /**
     * Organize the meal plan
     */
    public static function organize($mealPlan)
    {
        $startWeekDay = Carbon::now()->setISODate(Carbon::now()->year, $mealPlan->week_number)->startOfWeek()->format('Y-m-d');
        $endWeekDay = Carbon::now()->setISODate(Carbon::now()->year, $mealPlan->week_number)->endOfWeek()->format('Y-m-d');

        $weekDays = CarbonPeriod::create($startWeekDay, $endWeekDay)->toArray();

        $data = [];

        $meals = json_decode($mealPlan->meals, true);

        foreach (['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as $index => $day) {
            $data[$day] = [
                'date' => $weekDays[$index]->isoFormat('dddd, D MMMM'),
                'day' => $weekDays[$index]->isoFormat('D'),
                'Lunch' => [
                    'id' => $meals[$day . 'Lunch']['id'],
                    'data' => $meals[$day . 'Lunch']['data'] ? Recipe::where('id', $meals[$day . 'Lunch']['data'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned'
                ],
                'Dinner' => [
                    'id' => $meals[$day . 'Dinner']['id'],
                    'data' => $meals[$day . 'Dinner']['data'] ? Recipe::where('id', $meals[$day . 'Dinner']['data'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned',
                ],
            ];
        }

        return $data;
    }
}
