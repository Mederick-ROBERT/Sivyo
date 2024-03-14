<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;

class RegisterController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function handle()
    {
        return Inertia::render('Auth/Register/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|',
        ]);

        $credentials = $request->only('username', 'email', 'password');

        $credentials['id'] = Uuid::uuid4()->toString();

        $credentials['password'] = Hash::make($request->password);

        $credentials['role_id'] = Role::where('name', 'user')->first()->id;

        // user creation
        $user = User::create($credentials);

        event(new Registered($user));

        Auth::login($user);

        return redirect()->intended('dashboard');

    }
}
