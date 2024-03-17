import {Recipe} from "@/types";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {Link} from "@inertiajs/react";

interface RecipeDrawerProps {
  open: boolean;
  changeStatusDrawer: () => void;
  placement?: 'right' | 'left' | 'top' | 'bottom';
  recipes: Recipe[];
  mealId: string;
}

export default function RecipeDrawer({ open, changeStatusDrawer, placement = 'right', recipes, mealId }: RecipeDrawerProps) {
  return (
    <Drawer
      isOpen={open}
      placement={placement}
      onClose={changeStatusDrawer}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Change the meal</DrawerHeader>
          <DrawerBody>
            {recipes.map((recipe) => {
              return (
                <div key={recipe.id}>
                  <Link href={'/change-meal-plan'} method={'put'} as={'button'} onClick={changeStatusDrawer} data={{ mealId: mealId, recipeId: recipe.id }}><p>{recipe.name}</p></Link>
                </div>
              )
            })}
          </DrawerBody>
          <DrawerFooter>
            <button onClick={changeStatusDrawer}>Close</button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
