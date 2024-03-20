<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlan extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
      'id',
      'user_id',
      'week_number',
      'meals'
    ];
}
