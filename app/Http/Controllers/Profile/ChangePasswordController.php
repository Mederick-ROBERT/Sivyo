<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class ChangePasswordController extends Controller
{
    public function handle(): Response
    {
        return Inertia::render('Profile/ChangePassword/ChangePassword');
    }

    /**
    * update the user password
     *
    * @param Request $request
    * @return RedirectResponse
    */
    public function update(Request $request): RedirectResponse
    {
        $request->validate([
          'old_password' => ['required', 'string'],
          'new_password' => ['required', 'string', Password::default()],
          'password_confirmation' => ['required', 'string', 'same:new_password'],
        ]);

        if (!Hash::check($request->old_password, Auth::user()['password'])) {
            return back()->withErrors(['old_password' => 'The provided password does not match your current password']);
        }

        User::where('id', Auth::id())->update([
          'password' => Hash::make($request->new_password)
        ]);

        return to_route('change-password')->with('success', 'Password updated successfully');
    }
}
