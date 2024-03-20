<?php

namespace App\Http\Controllers\App\NewRecipe;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class NewRecipeController extends Controller
{
    public function handle(): Response
    {
        return Inertia::render('App/UserCreation/NewRecipe/NewRecipe');
    }
}
