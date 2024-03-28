<?php

namespace App\Http\Controllers\App\NewRecipe;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\CategoryRecipeJoin;
use App\Models\Ingredient;
use App\Models\IngredientRecipeJoin;
use App\Models\Recipe;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
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
            'ingredients' => 'nullable|array',
        ]);

        // encode the content
        $content = json_encode(['recipe' => $request->input('content')]);

        // create the recipe
        $newRecipe = Recipe::create([
          'name' => $request->input('name'),
          'slug' => Str::slug($request->input('name')),
          'content' => $content,
          'prep_time' => $request->input('prep_time'),
          'cook_time' => $request->input('cook_time'),
          'servings' => $request->input('servings'),
          'picture' => null,
          'user_id' => Auth::id(),
        ]);

        foreach ($request->ingredients as $ingredient) {
            IngredientRecipeJoin::create([
                'recipe_id' => $newRecipe->id,
                'ingredient_id' => $ingredient['id'],
                'quantity' => $ingredient['quantity'],
            ]);
        }

        CategoryRecipeJoin::create([
            'recipe_id' => $newRecipe->id,
            'category_id' => $request->input('category_id'),
        ]);

        return to_route('user-creation');
    }
}
