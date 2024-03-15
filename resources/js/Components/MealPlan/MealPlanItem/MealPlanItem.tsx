import MealPlanItemRecipe from "@/Components/MealPlan/MealPlanItemRecipe/MealPlanItemRecipe";

import './meal_plan_item.scss';
import {Recipe} from "@/types";

interface MealPlanItemProps {
  mealPlanItem: any;
  recipes: Recipe[];
}

export default function MealPlanItem({ mealPlanItem, recipes }: MealPlanItemProps) {
  const { date, meals } = mealPlanItem;
  return (
    <div className="meal_plan_item_container">
      <p className="meal_plan_item_date">{date}</p>
      <MealPlanItemRecipe mealPlanItemRecipe={meals} drawerData={mealPlanItem} recipes={recipes} />
    </div>
  );
}
