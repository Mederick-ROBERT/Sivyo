import {MealPlanRecipe} from "@/types";

import './meal_plan_recipe_data.scss'

interface MealPlanRecipeItemProps {
  mealData: MealPlanRecipe;
}

export default function MealPlanRecipeData({ mealData }: MealPlanRecipeItemProps) {
  const { name, prep_time, picture } = mealData;
  return (
    <div className="recipe_data_container">
      <div className="recipe_data_picture_wrapper">
        <img src={picture} alt={name}/>
      </div>
      <div className="recipe_data_content">
        <p className="recipe_data_content_name">{name}</p>
        <p className="recipe_data_content_prep_time">{prep_time}</p>
      </div>

    </div>
  )
}
