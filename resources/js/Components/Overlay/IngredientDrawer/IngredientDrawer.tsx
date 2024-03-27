import { Ingredient } from "@/types";
import {useRef, useState} from "react";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

interface IngredientDrawerProps {
    isOpen: boolean
    changeStatusDrawer: () => void;
    placement?: 'right' | 'left' | 'top' | 'bottom';
    ingredients: Ingredient[];
    handleAddIngredient: (ingredient: Ingredient) => void;
}

export default function IngredientDrawer({ isOpen, changeStatusDrawer, placement = 'bottom', ingredients, handleAddIngredient }: IngredientDrawerProps) {

    const searchInput : any = useRef<HTMLInputElement>()

    // region Ingredient search and filter
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (e: any) => {
        setSearchValue(e.target.value)
    }

    const filteredIngredients = isOpen ? ingredients.filter(ingredient => ingredient.name.startsWith(searchValue)) : null
    // endregion

    const handleIngredient = (ingredient: Ingredient) => {
        handleAddIngredient(ingredient)
        changeStatusDrawer()
    }

    return (
        <Drawer
            isOpen={isOpen}
            placement={placement}
            onClose={changeStatusDrawer}
            size={'md'}
            initialFocusRef={searchInput}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Ingredients</DrawerHeader>

                <DrawerBody>
                    <label htmlFor="ingredient-search">Search an ingredient :</label>
                    <input type="text" id="ingredient-search" ref={searchInput} onChange={handleSearch} value={searchValue} />

                    <div>
                        {filteredIngredients && filteredIngredients.slice(0, 20).map((ingredient) => (
                            <div key={ingredient.id}>
                                <button onClick={() => handleIngredient(ingredient)}>{ingredient.name}</button>
                            </div>
                        ))}
                    </div>
                </DrawerBody>

                <DrawerFooter>
                    <button onClick={changeStatusDrawer}>
                        Cancel
                    </button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
