import {Ingredient} from "@/types";

interface IngredientQuantityProps {
    ingredient: Ingredient;
    changeQuantity: (e: any) => void;
}

export default function IngredientQuantity({ ingredient, changeQuantity }: IngredientQuantityProps) {
    return (
        <div>
            <span>{ingredient.name}</span>
            <input type="number" name="quantity" id={ingredient.id} value={ingredient.quantity} onChange={changeQuantity} />
            <span>{ingredient.symbol}</span>
        </div>
    )
}
