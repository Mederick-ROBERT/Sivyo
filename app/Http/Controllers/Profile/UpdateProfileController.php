<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpdateProfileController extends Controller
{
  /**
   * Update the user profile
   *
   * @param Request $request
   * @return RedirectResponse
   */
    public function update(Request $request): RedirectResponse
    {
        // verify the request
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . Auth::id(),
        ]);

        // update the user profile
        User::where('id', Auth::id())->update([
            'username' => $request->username,
            'email' => $request->email,
        ]);

        // redirect to the profile page
        return to_route('profile')->with('success', 'Profile updated successfully');
    }
}
