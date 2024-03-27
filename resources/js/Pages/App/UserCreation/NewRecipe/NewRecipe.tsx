import {PageProps, Category, Ingredient} from "@/types";
import {useEffect, useState} from "react";
import {Head, router} from "@inertiajs/react";

// region Components
import InputGroup from '@/Components/Forms/InputGroup/InputGroup'
import Tiptap from "@/Components/Forms/Tiptap/Tiptap";
import Button from '@/Components/Forms/Button/Button'
import {useToast} from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/react'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import IngredientDrawer from "@/Components/Overlay/IngredientDrawer/IngredientDrawer";
import IngredientQuantity from "@/Components/NewRecipe/IngredientQuantity/IngredientQuantity";
// endregion

export default function NewRecipe({ categories, errors, ingredients }: PageProps<Category>) {

    // region Ingredient

    const [selectedIngredients, setSelectedIngredients] = useState([])

    // Update the ingredients on value state
    useEffect(() => {
        setValues(prevValues => ({
            ...prevValues,
            ingredients: selectedIngredients
        }));
    }, [selectedIngredients]);

    function handleAddIngredient(ingredient: Ingredient) {
        setSelectedIngredients([...selectedIngredients, ingredient])
    }

    function handleChangeQuantity(e: any) {
        const key = e.target.id
        const value = e.target.value
        setSelectedIngredients(selectedIngredients.map(ingredient => {
            if (ingredient.id === key) {
                ingredient.quantity = value
            }
            return ingredient
        }))
    }

    // remove an ingredient from the list
    function handleRemoveIngredient(ingredient: Ingredient) {
        setSelectedIngredients(selectedIngredients.filter(ing => ing.id !== ingredient.id))
    }

    // endregion

    const [values, setValues] = useState({
        name: '',
        content: '',
        prep_time: '',
        cook_time: '',
        picture: '',
        servings: 0,
        category_id: '',
        ingredients: selectedIngredients,
    })

    const toast = useToast()

    const firstErrorKey = Object.keys(errors)[0]
    const firstError = errors[firstErrorKey]

    useEffect(() => {
        if (firstError) {
            toast({
                description: firstError,
                status: 'error',
                duration: 3000,
                isClosable: true,
                variant: 'subtle'
            })
        }
    }, [errors])

    function handleChange(e: any) {
        const key = e.target.name
        const value = e.target.value
        setValues({
            ...values,
            [key]: value
        })
    }


    /**
    * Handle the change of the tiptap editor
    * @param content
    */
    function handleChangeTiptap(content: string) {
        setValues({
            ...values,
            content: content
        })
    }

    /**
     * Handle the form submission
     * @param e
     */
    function handleSubmit(e: any) {
        e.preventDefault()

        console.log(values)

        router.post('/new-recipe', values)
    }

    // region Drawer

    const [isOpen, setIsOpen] = useState(false)

    function changeStatusDrawer() {
        setIsOpen(!isOpen)
    }

    // endregion

    return (
        <div>
            <Head title={'New Recipe'} />
            <h1>Add a new recipe</h1>
            <form method={'post'} onSubmit={handleSubmit}>
                <InputGroup label={'Name'} name={'name'} onChange={handleChange} value={values.name}/>


                <InputGroup label={'Servings'} type={'number'} name={'servings'} onChange={handleChange} value={values.servings}/>

                <InputGroup label={'Preparation time'} type={'time'} name={'prep_time'} onChange={handleChange} value={values.prep_time}/>

                <InputGroup label={'Cooking time'} type={'time'} name={'cook_time'} onChange={handleChange} value={values.cook_time}/>

                <div>
                    <p>Add ingredients</p>
                    <IconButton aria-label='change meal' icon={<AddIcon />} onClick={changeStatusDrawer} />

                    <div>
                        {selectedIngredients && selectedIngredients.map((ingredient) => (
                            <div key={ingredient.id} >
                                <IngredientQuantity ingredient={ingredient} changeQuantity={handleChangeQuantity} />
                                <IconButton aria-label={'delete ingredient'} icon={<DeleteIcon />} onClick={() => handleRemoveIngredient(ingredient)} />
                            </div>
                        ))}
                    </div>
                </div>

                <fieldset>
                    <legend>Category</legend>
                    <select name={'category_id'} onChange={handleChange} value={values.category_id}>
                        <option value={''}>Select a category</option>
                        {categories && categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </fieldset>

                <Tiptap content={values.content} onUpdate={handleChangeTiptap}/>

                {/*<InputGroup label={'Picture'} type={'file'} name={'picture'} onChange={handleChange} value={values.picture} />*/}

                <Button type={'submit'} content={'Add recipe'}/>
            </form>
            <IngredientDrawer isOpen={isOpen} changeStatusDrawer={changeStatusDrawer} placement={'bottom'} ingredients={ingredients} handleAddIngredient={handleAddIngredient} />
        </div>
    )
}
