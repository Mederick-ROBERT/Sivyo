<?php

namespace App\Http\Controllers\App\NewRecipe;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Ingredient;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NewRecipeController extends Controller
{
    /**
    * handle the recipe creation page
    * @return Response
    */
    public function handle(): Response
    {
        // all categories
        $categories = Category::all();

        // all ingredients
        $ingredients = Ingredient::join('unities', 'ingredients.unity_id', '=', 'unities.id')
          ->select('ingredients.id', 'ingredients.name', 'ingredients.picture', 'unities.symbol')
          ->get();

        foreach ($ingredients as $ingredient) {
            $ingredient->quantity = 0;
        }

        return Inertia::render('App/UserCreation/NewRecipe/NewRecipe', [
            'categories' => $categories,
            'ingredients' => $ingredients,
        ]);
    }

  /**
   * store the new recipe
   * @param Request $request
   * @return RedirectResponse
   */
    public function store(Request $request): RedirectResponse
    {
        // validate the request
        $request->validate([
            'name' => 'required|string',
            'content' => 'nullable|string',
            'prep_time' => 'nullable|date_format:H:i',
            'cook_time' => 'nullable|date_format:H:i',
            'servings' => 'nullable|numeric',
            'category_id' => 'required|exists:categories,id',
            'picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // encode the content
        $content = json_encode(['recipe' => $request->input('content')]);

        return to_route('user-creation');
    }
}
