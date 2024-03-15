import './recipe_item.scss'
import { Recipe } from '@/types'
import { Link } from "@inertiajs/react";

interface RecipeItemProps {
  recipe: Recipe
}

export default function RecipeItem({ recipe }: RecipeItemProps) {
    const {id, name, content, servings, picture, prep_time, slug } = recipe

    const data = JSON.parse(content)

    return (
      <Link href={`/recipe/${id}/${slug}`} className="recipe_wrapper">
        <article className="recipe_item">
          <img src={picture} alt="recipe picture" className="recipe_item_img" />
          <div className="recipe_item_content">
            <h4 className="recipe_item_content_name">{name}</h4>
            <p className="recipe_item_content_intro">{data.recipe}</p>
            <hr className="recipe_item_content_separator" />
            <div className="recipe_item_content_bottom">
                <p>{prep_time}</p>
                <p className="recipe_item_content_bottom_people">For {servings} peoples</p>
            </div>
          </div>
        </article>
      </Link>
  )
}
