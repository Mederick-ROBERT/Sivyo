import MealPlanItem from "@/Components/MealPlan/MealPlanItem/MealPlanItem";

import './meal_plan_list.scss';
import {Recipe} from "@/types";

interface MealPlanListProps {
  mealPlan: any;
  recipes: Recipe[];
}

export default function MealPlanList({ mealPlan, recipes }: MealPlanListProps) {

  return (
    <div className="meal_plan_list">
      {mealPlan && Object.keys(mealPlan).map((plan: any) => (
        <MealPlanItem mealPlanItem={mealPlan[plan]} key={plan} recipes={recipes} />
      ))}
    </div>
  )

}
