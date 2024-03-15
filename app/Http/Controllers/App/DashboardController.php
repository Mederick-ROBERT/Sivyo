<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Utils\MealPlanOrganizer;
use App\Models\MealPlan;
use App\Models\Recipe;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
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
        // get the logged-in user
        $user = Auth::user();

        // get the meal plan for the user
        $mealPlan = MealPlan::where('user_id', $user->id)->first();

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
