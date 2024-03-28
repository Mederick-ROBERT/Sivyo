import { Recipe } from '@/types'
import { Link } from "@inertiajs/react";
import NotFound from '../../../../Picture/Utils/not_found.jpg'
import HtmlPurify from "@/Components/Utils/HtmlPurify/HtmlPurify";

import './recipe_item.scss'

interface RecipeItemProps {
  recipe: Recipe
}

export default function RecipeItem({ recipe }: RecipeItemProps) {
    const {id, name, content, servings, picture, prep_time, slug } = recipe

    const data = content ? JSON.parse(content) : null

    return (
      <Link href={`/recipe/${id}/${slug}`} className="recipe_wrapper">
        <article className="recipe_item">
          {picture ? (
                <img src={picture} alt="recipe picture" className="recipe_item_img"/>
          ) : (
                <img src={NotFound} alt="not found" className="recipe_item_img"/>
          )}

            <div className="recipe_item_content">
            <h4 className="recipe_item_content_name">{name}</h4>
            <HtmlPurify className={'recipe_item_content_intro'} content={data.recipe} />
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
