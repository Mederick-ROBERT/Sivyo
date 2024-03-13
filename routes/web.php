<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

// region Controllers
use App\Http\Controllers\HomeController;
use App\Http\Controllers\App\DashboardController;
// endregion

// Landing page route
Route::get('/', [HomeController::class, 'index'])->name('home');

// App route

// Dashboard route
Route::get('dashboard', [DashboardController::class, 'dashboard'])->middleware('auth')->name('dashboard');


// add auth route page
require __DIR__.'/auth.php';
