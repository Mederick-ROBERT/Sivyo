import MealPlanRecipeData from "@/Components/MealPlan/MealPlanRecipeData/MealPlanRecipeData";
import { IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import './meal_plan_container.scss'

interface MealPlanItemProps {
  mealPlan: any;
  changeStatusDrawer: () => void;
  changeId: (meal: any) => void;
}

export default function MealPlanItem({ mealPlan, changeStatusDrawer, changeId }: MealPlanItemProps) {

  const { date, day, Lunch, Dinner } = mealPlan;

  return (
    <div className="meal_plan_item_container">
      <h3 className="meal_plan_item_title">{date}</h3>
      <div className="meal_item_wrapper">
        {Lunch && Lunch.data.id ? (
          <MealPlanRecipeData mealData={Lunch.data} />
        ) : (
          <p className="meal_item_no_data">{Lunch.data}</p>
        )}
        <IconButton aria-label='change meal' icon={<AddIcon />} onClick={() => {
          changeId(Lunch);
          changeStatusDrawer();
        }} />
      </div>
      <div className="meal_item_wrapper">
        {Dinner && Dinner.data.id ? (
          <MealPlanRecipeData mealData={Dinner.data} />
        ) : (
          <p className="meal_item_no_data">{Dinner.data}</p>
        )}
        <IconButton aria-label='change meal' icon={<AddIcon />} onClick={() => {
          changeId(Dinner);
          changeStatusDrawer();
        }} />
      </div>
    </div>
  )
}
