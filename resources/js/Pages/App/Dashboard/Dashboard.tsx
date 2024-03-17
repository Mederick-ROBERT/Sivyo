import {Head} from '@inertiajs/react'
import {Recipe} from "@/types";
import {useState} from "react";

import RecipeDrawer from "@/Components/Overlay/RecipeDrawer/RecipeDrawer";
import MealPlanItem from "@/Components/MealPlan/MealPlanItem/MealPlanItem";

import './dashboard.scss'

interface DashboardProps {
  mealPlan: any;
  recipes: Recipe[];
}

export default function Dashboard({ mealPlan, recipes }: DashboardProps) {

  const [open, setOpen] = useState(false)

  const [id, setId] = useState('')

  // change the status of the drawer
  function changeStatusDrawer() {
    setOpen(!open)
  }

  // change the id of the meal
  function changeId(meal: any) {
    setId(meal.id)
  }

  return (
    <>
      <Head title="Dashboard" />
      <h1 className="dashboard_title">Dashboard</h1>
      <h2 className="meal_plan_title">Meal Plan</h2>
      <div className="meal_plan_container">
        {Object.keys(mealPlan).map((day) => {
          return (
            <MealPlanItem mealPlan={mealPlan[day]} changeStatusDrawer={changeStatusDrawer} changeId={changeId} key={day} />
          )
        })}
      </div>
      <RecipeDrawer open={open} changeStatusDrawer={changeStatusDrawer} recipes={recipes} mealId={id} />
    </>
  )
}
