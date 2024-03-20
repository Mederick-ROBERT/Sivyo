<?php

use Illuminate\Support\Facades\Route;

// region Controllers
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Profile\UpdateProfileController;
use App\Http\Controllers\Profile\ChangePasswordController;
// endregion


Route::middleware(['auth', 'verified'])
    ->group( function() {

        Route::controller(ProfileController::class)
            ->group( function() {

                Route::get('/profile', 'handle')->name('profile');

            });

        Route::controller(UpdateProfileController::class)
            ->group( function() {

                Route::put('/profile', 'update')->name('profile.update');

            });

        Route::controller(ChangePasswordController::class)
            ->group( function() {

                Route::get('/change-password', 'handle')->name('change-password');
                Route::put('/change-password', 'update')->name('change-password.update');

            });

    });
