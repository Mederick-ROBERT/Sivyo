<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Utils\RecipePreparator;
use App\Models\Recipe;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class UserCreationController extends Controller
{
  /**
   * user recipe page
   * @return Response
   */
    public function handle(): Response
    {
        $user_recipes = Recipe::where('user_id', Auth::id())->get();

        $user_recipes_prepared = RecipePreparator::recipe_preparation($user_recipes);

        return Inertia::render('App/UserCreation/UserCreation', [
            'user_recipes' => $user_recipes_prepared
        ]);
    }
}
