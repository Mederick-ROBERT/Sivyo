<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{
    function chooseCategory(): string
    {
        $data = Category::all();

        return $data->random()->id;
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'content' => '{"recipe": " ' . $this->faker->text . ' "}',
            'prep_time' => $this->faker->time(),
            'cook_time' => $this->faker->time(),
            'servings' => $this->faker->numberBetween(1, 10),
            'picture' => $this->faker->imageUrl(),
            'category_id' => $this->chooseCategory(),
        ];
    }
}
