import MealItem from "@/Components/MealPlan/MealItem/MealItem";

import './meal_plan_item_recipe_once.scss';

interface MealPlanItemRecipeOnceProps {
  meal: any;
  type: string;
}

export default function MealPlanItemRecipeOnce({ meal, type }: MealPlanItemRecipeOnceProps) {
  return (
    <div className="meal_plan_item_recipe_once_container">
      <p className="meal_plan_item_recipe_once_type">{type}</p>
      {meal.id ? (
        <MealItem recipe={meal} />
      ) : (
        <p className="meal_plan_item_recipe_once_no_data">{meal}</p>
      )}
    </div>
  );
}
