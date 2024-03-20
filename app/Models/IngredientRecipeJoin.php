<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngredientRecipeJoin extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'id',
        'ingredient_id',
        'recipe_id',
        'quantity',
    ];
}
