import { Recipe } from "@/types";
import RecipesList from "@/Components/Recipes/RecipesList/RecipesList";
import {Head, Link} from "@inertiajs/react";

interface UserCreationProps {
  user_recipes: Recipe[];
}

export default function UserCreation({user_recipes}: UserCreationProps) {

    return (
        <div>
            <Head title={'My creation'} />
            <h1>My creations</h1>
            <Link href={'/new-recipe'} >Add a recipe</Link>
            {user_recipes && user_recipes.length > 0 ? (
              <RecipesList recipes={user_recipes} />
            ) : (
              <p>No recipe on the horizon</p>
            )}
        </div>
    )
}
