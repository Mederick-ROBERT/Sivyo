import { Recipe } from "@/types";

interface ShowProps {
  recipe: Recipe
}

export default function Show({ recipe }: ShowProps) {
    return (
      <>
        <div className="container">
          <div className="title">Page Show</div>
        </div>
      </>
    )
}
