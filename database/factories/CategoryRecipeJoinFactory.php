<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CategoryRecipeJoin>
 */
class CategoryRecipeJoinFactory extends Factory
{
    function chooseCategory(): string
    {
        return Category::all()->random()->id;
    }

    function chooseRecipe(): string
    {
        return Recipe::all()->random()->id;
    }


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id' => $this->chooseCategory(),
            'recipe_id' => $this->chooseRecipe(),
        ];
    }
}
