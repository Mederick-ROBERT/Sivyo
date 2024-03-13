import './recipe_item.scss'
import string from '@poppinss/utils/string'
import TimerFormat from '../../utils/time_format/time_format'

interface RecipeItemProps {
  recipe: any
}

export default function RecipeItem({ recipe }: RecipeItemProps) {
  const { name, content, people } = recipe

  return (
    <article className="recipe_item">
      <img src={recipe.picture_url} alt="recipe picture" className="recipe_item_img" />
      <div className="recipe_item_content">
        <h4 className="recipe_item_content_name">{name}</h4>
        <p className="recipe_item_content_intro">{string.truncate(content.recipe, 100)}</p>
        <hr className="recipe_item_content_separator" />
        <div className="recipe_item_content_bottom">
          <TimerFormat time={recipe.prep_time} />
          <p className="recipe_item_content_bottom_people">For {people} peoples</p>
        </div>
      </div>
    </article>
  )
}
