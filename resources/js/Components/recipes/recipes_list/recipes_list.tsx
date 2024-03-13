import './recipes_list.scss'
import Recipe from '#models/recipe'
import RecipeItem from '../recipe_item/recipe_item'

interface RecipesListProps {
  recipes: Recipe[]
}

export default function RecipesList({ recipes }: RecipesListProps) {
  console.log('RECIPE = ', recipes.rows)
  return (
    <div className="recipes_list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
