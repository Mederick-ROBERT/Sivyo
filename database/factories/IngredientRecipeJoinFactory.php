<?php

namespace Database\Factories;

use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\IngredientRecipeJoin>
 */
class IngredientRecipeJoinFactory extends Factory
{
    /**
     * The id of the recipe
     *
     * @var string
     */
    public function recipeId() {
        $recipe = Recipe::inRandomOrder()->first();

        return $recipe->id;
    }

    /**
     * The id of the ingredient
     *
     * @var string
     */
    public function ingredientId() {
        $ingredient = Ingredient::inRandomOrder()->first();

        return $ingredient->id;
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'recipe_id' => $this->recipeId(),
            'ingredient_id' => $this->ingredientId(),
            'quantity' => $this->faker->randomFloat(2, 0, 1000),
        ];
    }
}
