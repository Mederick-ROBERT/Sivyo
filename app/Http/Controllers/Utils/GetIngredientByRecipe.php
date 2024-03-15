<?php

namespace App\Http\Controllers\Utils;

use App\Http\Controllers\Controller;
use App\Models\Ingredient;
use App\Models\Unity;

class GetIngredientByRecipe extends Controller
{
    public static function handle($recipe) {
        $ingredients = $recipe->ingredientInRecipe;

        $data = [];

        foreach ($ingredients as $key => $ingredient) {
          $item = Ingredient::find($ingredient->ingredient_id);
          $data[$key]['name'] = $item->name;

          $data[$key]['quantity'] = $ingredient->quantity;

          $unity_id = $item->unity_id;
          $unity = Unity::find($unity_id);
          $data[$key]['unity'] = $unity->symbol;

          $data[$key]['picture'] = $item->picture;
        }

        return $data;
    }
}
