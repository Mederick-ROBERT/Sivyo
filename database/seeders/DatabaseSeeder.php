<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Recipe;
use App\Models\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create(['name' => 'User']);
        Role::create(['name' => 'Admin']);

        Category::create(['name' => 'Entry']);
        Category::create(['name' => 'Flat']);
        Category::create(['name' => 'Dessert']);

        Recipe::factory(10)->create();
    }
}
