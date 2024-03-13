import Recipe from '~/app/models/recipe'

import './popular.scss'

import TimerFormat from '../../utils/time_format/time_format'

interface PopularProps {
  recipes: Recipe
}

export default function Popular({ recipes }: PopularProps) {
  const { name, prepTime, pictureUrl } = recipes

  return (
    <div className="popular_container">
      <img src={pictureUrl} alt={name} className="popular_picture" />
      <span className="popular_filter"></span>
      <div className="popular_data">
        <p className="popular_icon">TO TEST</p>
        <h2 className="popular_title">{name}</h2>
        <p className="popular_time">
          <TimerFormat time={prepTime} />
        </p>
      </div>
    </div>
  )
}
