<?php

namespace Database\Factories;

use App\Models\Unity;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ingredient>
 */
class IngredientFactory extends Factory
{
    /**
     * the id of the unity
     *
     * @var string
     */
    public function unityId(): string
    {
        $unity = Unity::inRandomOrder()->first();

        return $unity->id;
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'unity_id' => $this->unityId(),
            'picture' => $this->faker->imageUrl(),
        ];
    }
}
