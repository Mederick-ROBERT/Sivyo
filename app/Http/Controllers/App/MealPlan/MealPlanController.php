<?php

namespace App\Http\Controllers\App\MealPlan;

use App\Http\Controllers\Controller;
use App\Models\MealPlan;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MealPlanController extends Controller
{
  /**
   * Update the meal plan
   *
   * @param Request $request
   * @return RedirectResponse
   */
    public function update(Request $request)
    {
        // logged in user
        $user = Auth::user();

        // meal plan of the user
        $mealPlanOriginal = MealPlan::where('user_id', $user->id)->first();

        // search the meal to update
        $mealPlan = json_decode($mealPlanOriginal->meals, true);

        foreach ($mealPlan as $key => $value) {
            if($value['id'] == $request->mealId) {
                $mealPlan[$key]['data'] = $request->recipeId;
            }
        }

        // update the meal plan
        MealPlan::where('user_id', $mealPlanOriginal->user_id)->update([
            'user_id' => $mealPlanOriginal->user_id,
            'week_number' => $mealPlanOriginal->week_number,
            'meals' => json_encode($mealPlan)
        ]);

        return to_route('dashboard');

    }
}
