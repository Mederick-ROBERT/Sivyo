import type { Recipe } from '@/types'

import './popular.scss'

interface PopularProps {
  recipes: Recipe
}

export default function Popular({ recipes }: PopularProps) {
  const { name, prep_time, picture } = recipes

  return (
    <div className="popular_container">
      <img src={picture} alt={name} className="popular_picture" />
      <span className="popular_filter"></span>
      <div className="popular_data">
        <p className="popular_icon">TO TEST</p>
        <h2 className="popular_title">{name}</h2>
        <p className="popular_time">
        </p>
      </div>
    </div>
  )
}
