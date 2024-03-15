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

        // Monday
        $data['MON'] = [
            'date' => $weekDays[0]->isoFormat('dddd, D MMMM'),
            'day' => $weekDays[0]->isoFormat('D'),
            'meals' => [
                'Lunch' => $meals['mondayLunch'] ? Recipe::where('id', $meals['mondayLunch'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned',
                'Dinner' => $meals['mondayDinner'] ? Recipe::where('id', $meals['mondayDinner'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned'
            ]
        ];

        // Tuesday
        $data['TUE'] = [
            'date' => $weekDays[1]->isoFormat('dddd, D MMMM'),
            'day' => $weekDays[1]->isoFormat('D'),
            'meals' => [
                'Lunch' => $meals['tuesdayLunch'] ? Recipe::where('id', $meals['tuesdayLunch'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned',
                'Dinner' => $meals['tuesdayDinner'] ? Recipe::where('id', $meals['tuesdayDinner'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned'
            ]
        ];

        // Wednesday
        $data['WED'] = [
            'date' => $weekDays[2]->isoFormat('dddd, D MMMM'),
            'day' => $weekDays[2]->isoFormat('D'),
            'meals' => [
                'Lunch' => $meals['wednesdayLunch'] ? Recipe::where('id', $meals['wednesdayLunch'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned',
                'Dinner' => $meals['wednesdayDinner'] ? Recipe::where('id', $meals['wednesdayDinner'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned'
            ]
        ];

        // Thursday
        $data['THU'] = [
            'date' => $weekDays[3]->isoFormat('dddd, D MMMM'),
            'day' => $weekDays[3]->isoFormat('D'),
            'meals' => [
                'Lunch' => $meals['thursdayLunch'] ? Recipe::where('id', $meals['thursdayLunch'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned',
                'Dinner' => $meals['thursdayDinner'] ? Recipe::where('id', $meals['thursdayDinner'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned'
            ]
        ];

        // Friday
        $data['FRI'] = [
            'date' => $weekDays[4]->isoFormat('dddd, D MMMM'),
            'day' => $weekDays[4]->isoFormat('D'),
            'meals' => [
                'Lunch' => $meals['fridayLunch'] ? Recipe::where('id', $meals['fridayLunch'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned',
                'Dinner' => $meals['fridayDinner'] ? Recipe::where('id', $meals['fridayDinner'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned'
            ]
        ];

        // Saturday
        $data['SAT'] = [
            'date' => $weekDays[5]->isoFormat('dddd, D MMMM'),
            'day' => $weekDays[5]->isoFormat('D'),
            'meals' => [
                'Lunch' => $meals['saturdayLunch'] ? Recipe::where('id', $meals['saturdayLunch'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned',
                'Dinner' => $meals['saturdayDinner'] ? Recipe::where('id', $meals['saturdayDinner'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned'
            ]
        ];

        // Sunday
        $data['SUN'] = [
            'date' => $weekDays[6]->isoFormat('dddd, D MMMM'),
            'day' => $weekDays[6]->isoFormat('D'),
            'meals' => [
                'Lunch' => $meals['sundayLunch'] ? Recipe::where('id', $meals['sundayLunch'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned',
                'Dinner' => $meals['sundayDinner'] ? Recipe::where('id', $meals['sundayDinner'])->first()->only('id', 'name', 'prep_time', 'picture') : 'No meal planned'
            ]
        ];

        return $data;
    }
}
