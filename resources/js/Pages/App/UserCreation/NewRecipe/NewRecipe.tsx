import { PageProps } from "@/types";
import {useEffect, useState} from "react";
import {Head, router} from "@inertiajs/react";

// region Components
import InputGroup from '@/Components/Forms/InputGroup/InputGroup'
import Tiptap from "@/Components/Forms/Tiptap/Tiptap";
import Button from '@/Components/Forms/Button/Button'
import {useToast} from "@chakra-ui/react";
// endregion

export default function NewRecipe() {

    const [values, setValues] = useState({
        name: '',
        content: '',
        prep_time: '',
        cook_time: '',
        picture: '',
        servings: 0,
        category_id: '',
    })

    function handleChange(e: any) {
        const key = e.target.name
        const value = e.target.value
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        // console.log(values)
    }

    return (
    <div>
        <Head title={'New Recipe'} />
        <h1>Add a new recipe</h1>
        <form method={'post'} onSubmit={handleSubmit}>
            <InputGroup label={'Name'} name={'name'} onChange={handleChange} value={values.name} />
            <Tiptap />
        </form>
    </div>
    )
}
