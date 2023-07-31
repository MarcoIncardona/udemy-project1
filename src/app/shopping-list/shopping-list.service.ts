import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core"

export class ShoppingListService{
    ingredients: Ingredient[] = []
    ingredientsChanged = new EventEmitter<Ingredient[]>()

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
        this.ingredientsChanged.emit(this.ingredients)
    }

    addIngredients(ingredients: Ingredient[]){
        for(let ingredient of ingredients){
            this.onAddIngredient(ingredient.name, ingredient.amount)
        }
        this.ingredientsChanged.emit(this.ingredients)
    }
    
}