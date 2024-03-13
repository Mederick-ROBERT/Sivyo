<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('app/dashboard/dashboard');
    }
}
