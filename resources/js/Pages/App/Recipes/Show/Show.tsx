import { Recipe } from "@/types";
import {Head} from "@inertiajs/react";

interface ShowProps {
  recipe: Recipe
}

export default function Show({ recipe }: ShowProps) {
  const { name, content, picture, prep_time, cook_time, servings, ingredients } = recipe
  console.log(recipe)

  return (
      <>
        <Head title={name} />
        <div className="container">
          <div className="title">Page Show ={">"} add view transition</div>
        </div>
      </>
    )
}
