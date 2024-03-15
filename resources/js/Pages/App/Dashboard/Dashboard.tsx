import { Head } from '@inertiajs/react'
import MealPlanList from "@/Components/MealPlan/MealPlanList/MealPlanList";
import {Recipe} from "@/types";

interface DashboardProps {
  mealPlan: any;
  recipes: Recipe[];
}

export default function Dashboard({ mealPlan, recipes }: DashboardProps) {
  return (
    <>
      <Head title="Dashboard" />
      <h1>Dashboard</h1>
      <p>Meal Plan </p>
      <MealPlanList mealPlan={mealPlan} recipes={recipes} />
    </>
  )
}
