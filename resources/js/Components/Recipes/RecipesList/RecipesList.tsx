import './recipes_list.scss'
import RecipeItem from '@/Components/Recipes/RecipeItem/RecipeItem'
import { Recipe } from '@/types'

interface RecipesListProps {
  recipes: Recipe[]
}

export default function RecipesList({ recipes }: RecipesListProps) {
  return (
    <div className="recipes_list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
