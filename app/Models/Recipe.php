<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;
    use HasUuids;

    public function ingredientInRecipe()
    {
        return $this->hasMany(IngredientRecipeJoin::class);
    }
}
