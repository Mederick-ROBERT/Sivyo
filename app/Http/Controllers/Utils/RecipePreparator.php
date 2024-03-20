<?php

namespace App\Http\Controllers\Utils;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Str;

class RecipePreparator extends Controller
{
    public static function recipe_preparation($allRecipes)
    {
        foreach ($allRecipes as $recipe) {
          /* prep_time */
          $hours = Carbon::parse($recipe['prep_time'])->format('H');
          if ($hours == 0)
            $recipe['prep_time'] = Carbon::parse($recipe['prep_time'])->isoFormat('m[ min]');
          else
            $recipe['prep_time'] = Carbon::parse($recipe['prep_time'])->isoFormat('H[ hr] m[ min]');


          /* slug */
          $recipe['slug'] = Str::slug($recipe['name']);

        }

        return $allRecipes;
    }
}
