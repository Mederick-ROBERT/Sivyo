import { MealPlanRecipe } from "@/types";

import './meal_item.scss'

interface RecipeItemProps {
  recipe: MealPlanRecipe;
}

export default function MealItem({ recipe }: RecipeItemProps) {
  const { id, name, prep_time, picture } = recipe;
  return (
      <div className="meal_item_container">
        <div className="meal_item_picture">
          <img src={picture} alt={name}/>
        </div>
        <div className="meal_item_info">
          <p className="meal_item_name">{name}</p>
          <p className="meal_item_time">{prep_time}</p>
        </div>
      </div>
  );
}
