import {Head, Link} from '@inertiajs/react'
import { PageProps } from "@/types";

// region components
import Popular from '@/Components/Recipes/Popular/Popular'
import RecipesList from '@/Components/Recipes/RecipesList/RecipesList'
// endregion

import './recipes.scss'
import Pagination from "@/Components/Utils/Pagination/Pagination";

export default function Recipes({ popularRecipes, allRecipes }: PageProps) {
  const { data, next_page_url, prev_page_url } = allRecipes

  return (
    <div className="recipes_container">
      <Head title={'Recipes'} />
      <div className="recipes_header">
        <h1 className="recipes_header_title">
          The Recipes
          <span className="recipes_underbar"></span>
        </h1>
        <div className="recipes_search">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"
            />
          </svg>
        </div>
      </div>
      <div className="recipes_body">
        <Popular recipes={popularRecipes} />
        <div className="recipes_categories">
          <h2 className="recipes_categories_title">Categories</h2>
        </div>
        <div className="recipes_list">
          <Pagination next_page_url={next_page_url} prev_page_url={prev_page_url} />
          <RecipesList recipes={data} />
        </div>
      </div>
    </div>
  )
}
