import MealPlanItemRecipeOnce from "@/Components/MealPlan/MealPlanItemRecipeOnce/MealPlanItemRecipeOnce";
import MealDrawer from "@/Components/Overlay/MealDrawer/MealDrawer";
import {useState} from "react";

// button components
import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'

import './meal_plan_item_recipe.scss';
import {Recipe} from "@/types";

interface MealPlanItemRecipeProps {
  mealPlanItemRecipe: any;

  drawerData: any;
  recipes: Recipe[];
}

export default function MealPlanItemRecipe({ mealPlanItemRecipe, drawerData, recipes }: MealPlanItemRecipeProps) {
  const [open, setOpen] = useState(false)

  function onClose() {
    setOpen(false)
  }

  function onOpen() {
    setOpen(true)
  }

  return (
    <>
      <div className="meal_plan_item_recipe_container">
        {mealPlanItemRecipe && Object.keys(mealPlanItemRecipe).map((meal: any) => (
          <div key={meal} >
            <div className="recipe_button_wrapper">
              <MealPlanItemRecipeOnce meal={mealPlanItemRecipe[meal]} type={meal} />
              <IconButton
                variant='outline'
                aria-label='change meal'
                icon={<AddIcon />}
                onClick={onOpen}
              />
            </div>
            <MealDrawer isOpen={open} onClose={onClose} meal={drawerData} type={meal} recipes={recipes} />
          </div>
        ))}
      </div>
    </>
  );
}
