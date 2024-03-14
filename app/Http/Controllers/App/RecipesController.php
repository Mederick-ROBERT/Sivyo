<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
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
        $popularRecipes = Recipe::inRandomOrder()->first();

        $allRecipes = Recipe::paginate(8);

        foreach ($allRecipes as $recipe) {
            $hours = Carbon::parse($recipe['prep_time'])->format('H');
            if ($hours == 0)
                $recipe['prep_time'] = Carbon::parse($recipe['prep_time'])->isoFormat('m[ min]');
            else
                $recipe['prep_time'] = Carbon::parse($recipe['prep_time'])->isoFormat('H[ hr] m[ min]');

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
      $recipe = Recipe::findOrFail($id);

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
