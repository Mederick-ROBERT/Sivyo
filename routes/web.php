<?php

use Illuminate\Support\Facades\Route;

// region Controllers
use App\Http\Controllers\App\DashboardController;
use App\Http\Controllers\App\MealPlan\MealPlanController;
use App\Http\Controllers\App\NewRecipe\NewRecipeController;
use App\Http\Controllers\App\RecipesController;
use App\Http\Controllers\App\UserCreationController;
use App\Http\Controllers\HomeController;
// endregion

// Landing page route
Route::get('/', [HomeController::class, 'index'])->name('home');

// region App routes
Route::middleware(['auth', 'verified'])
  ->group( function() {

    /// Dashboard route
    Route::get('dashboard', [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

    /// Recipes routes
    Route::get('recipes', [RecipesController::class, 'handle'])->name('recipes');
    Route::get('recipe/{id}/{name}', [RecipesController::class, 'show'])->name('recipes.show');

    /// Meal Plan route
    Route::put('change-meal-plan', [MealPlanController::class, 'update'])->name('change-meal-plan');

    /// User Creation routes
    Route::get('user-creation', [UserCreationController::class, 'handle'])->name('user-creation');

    /// New Recipe routes
    Route::get('new-recipe', [NewRecipeController::class, 'handle'])->name('new-recipe');
    Route::post('new-recipe', [NewRecipeController::class, 'store'])->name('new-recipe.store');

  });

// endregion

// add auth route page
require __DIR__.'/auth.php';

// add profile route page
require __DIR__.'/profile.php';
