<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
      'id',
      'name',
      'slug',
      'content',
      'prep_time',
      'cook_time',
      'servings',
      'picture',
      'user_id',
    ];

    public function ingredientInRecipe()
    {
        return $this->hasMany(IngredientRecipeJoin::class);
    }
}
