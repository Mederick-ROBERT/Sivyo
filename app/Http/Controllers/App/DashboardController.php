<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Utils\MealPlanOrganizer;
use App\Models\MealPlan;
use App\Models\Recipe;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the dashboard page.
     *
     * @return \Inertia\Response
     */
    public function dashboard()
    {
        // get the meal plan for the logged-in user
        $mealPlan = MealPlan::where('user_id', Auth::id())->first();

        // verify meal plan week
        $thisWeek = Carbon::now()->week;

        if($mealPlan->week_number != $thisWeek) {
            MealPlan::where('id', $mealPlan->id)->update([
                'week_number' => $thisWeek
            ]);
        }

        // organize the meal plan
        $organizedMealPlan = MealPlanOrganizer::organize($mealPlan);

        // get all recipes
        $recipes = Recipe::select('id', 'name', 'prep_time', 'picture')->get();

        return Inertia::render('App/Dashboard/Dashboard', [
            'mealPlan' => $organizedMealPlan,
            'recipes' => $recipes
        ]);
    }
}
