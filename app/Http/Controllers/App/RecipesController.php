<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Utils\GetIngredientByRecipe;
use App\Models\Recipe;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class RecipesController extends Controller
{
    /**
     * Show the recipes page.
     *
     * @return Response
     */
    public function handle(): Response
    {
        /*
        * Get a random recipe to display on the home page
        */
        $popularRecipes = Recipe::inRandomOrder()->first();

        /*
        * Get all recipes to display on the recipes page
        */
        $allRecipes = Recipe::paginate(8);

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

        return Inertia::render('App/Recipes/Recipes', [
            'popularRecipes' => $popularRecipes,
            'allRecipes' => $allRecipes,
        ]);
    }

    /**
     * Show the recipe page.
     *
     * @param int $id
     * @return Response
     */
    public function show(string $id): Response
    {
      $recipe = Recipe::with('ingredientInRecipe')->findOrFail($id);

      $recipe['ingredients'] = GetIngredientByRecipe::handle($recipe);

      $hours = Carbon::parse($recipe['prep_time'])->format('H');

      if ($hours == 0)
          $recipe['prep_time'] = Carbon::parse($recipe['prep_time'])->isoFormat('m[ min]');
      else
          $recipe['prep_time'] = Carbon::parse($recipe['prep_time'])->isoFormat('H[ hr] m[ min]');

      return Inertia::render('App/Recipes/Show/Show', [
          'recipe' => $recipe,
      ]);
    }
}
