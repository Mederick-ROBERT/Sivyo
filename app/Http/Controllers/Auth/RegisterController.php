<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;

class RegisterController extends Controller
{
    public function handle()
    {
        return Inertia::render('auth/register/register');
    }

    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|',
        ]);

        $credentials = $request->only('username', 'email', 'password');

        $credentials['id'] = Uuid::uuid4()->toString();

        $credentials['password'] = Hash::make($credentials['password']);

        $credentials['role_id'] = Role::where('name', 'user')->first()->id;

        $newUser = User::create($credentials);

        Auth::attempt($request->only('email', 'password'));
        $request->session()->regenerate();

        return redirect()->intended('dashboard');

    }
}
