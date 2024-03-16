import {Head, Link} from '@inertiajs/react'
import {Recipe} from "@/types";
import {useState} from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

interface DashboardProps {
  mealPlan: any;
  recipes: Recipe[];
}

export default function Dashboard({ mealPlan, recipes }: DashboardProps) {
  console.log(mealPlan);

  const [open, setOpen] = useState(false)

  const [id, setId] = useState('')

  function changeStatusDrawer() {
    setOpen(!open)
  }

  function changeId(meal: any) {
    setId(meal.id)
  }
console.log(id)
  return (
    <>
      <Head title="Dashboard" />
      <h1>Dashboard</h1>
      <p>Meal Plan </p>
      {Object.keys(mealPlan).map((day) => {
        return (
          <div key={day}>
            <h2>{mealPlan[day].date}</h2>
            <div>
              {mealPlan[day] && mealPlan[day].Lunch.data.id ? (
                <p>{mealPlan[day].Lunch.data.name}</p>
              ) : (
                <p>{mealPlan[day].Lunch.data}</p>
              )}
              <button onClick={() => {
                changeId(mealPlan[day].Lunch);
                changeStatusDrawer();
              }}>Change
              </button>
            </div>
            <div>
              {mealPlan[day] && mealPlan[day].Dinner.data.id ? (
                <p>{mealPlan[day].Dinner.data.name}</p>
              ) : (
                <p>{mealPlan[day].Dinner.data}</p>
              )}
              <button onClick={() => {
                changeId(mealPlan[day].Dinner);
                changeStatusDrawer();
              }}>Change
              </button>
            </div>
          </div>
        )
      })}
      <Drawer
        isOpen={open}
        placement='right'
        onClose={changeStatusDrawer}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>Change the meal</DrawerHeader>

          <DrawerBody>
            {recipes.map((recipe) => {
              return (
                <div key={recipe.id}>
                  <Link href={'/change-meal-plan'} method={'put'} as={'button'} data={{ mealId: id, recipeId: recipe.id }}><p>{recipe.name}</p></Link>
                </div>
              )
            })}
          </DrawerBody>

          <DrawerFooter>
            <button onClick={changeStatusDrawer}>Close</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
