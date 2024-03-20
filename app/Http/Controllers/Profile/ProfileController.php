<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function handle(): Response
    {
        return Inertia::render('Profile/Profile');
    }
}
