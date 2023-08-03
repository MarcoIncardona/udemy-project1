import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredients: Ingredient[] = []
    ingredientsChanged = new Subject<Ingredient[]>()

    getIngredients(){
        return this.ingredients
    }

    onAddIngredient(name: string, amount: number){     
        this.ingredients.push({
            name: name,
            amount: amount
        })
    }

    onClearIngredients(){
        this.ingredients = [];
        this.ingredientsChanged.next(this.ingredients)
    }

    addIngredients(ingredients: Ingredient[]){
        for(let ingredient of ingredients){
            this.onAddIngredient(ingredient.name, ingredient.amount)
        }
        this.ingredientsChanged.next(this.ingredients)
    }
    
}