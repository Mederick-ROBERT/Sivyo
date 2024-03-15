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

interface MealDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  meal: any
  type: string

  recipes: Recipe[];
}

export default function MealDrawer({ isOpen, onClose, meal, type, recipes }: MealDrawerProps) {
  return (
    <div>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Change the meal for the {type} of {meal.date}</DrawerHeader>

          <DrawerBody>
            <p>Recipes</p>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <p>{recipe.name}</p>
              </div>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <button onClick={onClose}>
              Cancel
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
