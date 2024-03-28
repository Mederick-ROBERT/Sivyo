<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryRecipeJoin extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
      'category_id',
      'recipe_id'
    ];
}