<?php

namespace Database\Seeders;

use App\Http\Controllers\Utils\MealPlanCreator;
use App\Models\Category;
use App\Models\Ingredient;
use App\Models\IngredientRecipeJoin;
use App\Models\Recipe;
use App\Models\Role;
use App\Models\Unity;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create(['name' => 'User']);
        $role = Role::create(['name' => 'Admin']);

        $user = User::create([
            'username' => 'Admin',
            'email' => 'admin@admin.fr',
            'password' => '$2y$12$EzikNiqcJ395f26JKsUGhuMtIqpCgnpsPuzQdN0JpYFiWXH3Ukgk6', // azerty
            'role_id' => $role->id,
        ]);

        MealPlanCreator::createMealPlan($user->id);

        Category::create(['name' => 'Entry']);
        Category::create(['name' => 'Flat']);
        Category::create(['name' => 'Dessert']);

        Recipe::factory(20)->create();

        Unity::create(['name' => 'gramme', 'symbol' => 'g']);
        Unity::create(['name' => 'centilitre', 'symbol' => 'cl']);
        Unity::create(['name' => 'piece', 'symbol' => 'pcs']);
        Unity::create(['name' => 'cuillère à soupe', 'symbol' => 'c. à s.']);
        Unity::create(['name' => 'cuillère à café', 'symbol' => 'c. à c.']);

        Ingredient::factory(100)->create();

        IngredientRecipeJoin::factory(100)->create();
    }
}
