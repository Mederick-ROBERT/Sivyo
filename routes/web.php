<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

// region Controllers
use App\Http\Controllers\HomeController;
use App\Http\Controllers\App\DashboardController;
use App\Http\Controllers\App\RecipesController;
// endregion

// Landing page route
Route::get('/', [HomeController::class, 'index'])->name('home');

// region App routes
Route::middleware(['auth', 'verified'])
  ->group( function() {

    /// Dashboard route
    Route::get('dashboard', [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

    /// Recipes route
    Route::get('recipes', [RecipesController::class, 'handle'])->name('recipes');
    Route::get('recipe/{id}/{name}', [RecipesController::class, 'show'])->name('recipes.show');

  });

// endregion

// add auth route page
require __DIR__.'/auth.php';
