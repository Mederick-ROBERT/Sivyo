<?php

use Illuminate\Support\Facades\Route;

// region Controllers
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
// endregion

Route::middleware('guest')
    ->group( function() {

        Route::controller(LoginController::class)
            ->group( function() {

                Route::get('/login', 'handle')->name('login');

                Route::post('/login', 'authenticate')->name('login.authenticate');

            });

        Route::controller(RegisterController::class)
            ->group( function() {

                Route::get('/register', 'handle')->name('register.handle');

                Route::post('/register', 'store')->name('register.store');

            });

    });

Route::middleware(['auth', 'verified'])
    ->group( function() {

        Route::post('/logout', [LogoutController::class, 'destroy'])->name('logout');

    });




