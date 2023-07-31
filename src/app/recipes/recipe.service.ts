import { EventEmitter, Injectable } from "@angular/core"
import { Recipe } from "./recipe.model"
import { Ingredient } from "../shared/ingredient.model"
import { ShoppingListService } from "../shopping-list/shopping-list.service"

@Injectable()
export class RecipeService{
   private recipes: Recipe[] = [
        new Recipe(1, "Carbonara", "ricetta pasta italiana", "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg", [new Ingredient("uova", 3), new Ingredient("pecorino", 10), new Ingredient("pasta", 100)]),
        new Recipe(2, "cacio e pepe", "altra ricetta italiana", "https://www.giallozafferano.it/images/ricette/219/21989/foto_hd/hd650x433_wm.jpg", [new Ingredient("pepe", 3), new Ingredient("formaggio", 5), new Ingredient("pasta", 100)]),
        new Recipe(3, "alla norma", "un'altra pasta italiana", "https://www.giallozafferano.it/images/179-17902/Spaghetti-alla-Norma_650x433_wm.jpg", [new Ingredient("melanzane", 2), new Ingredient("salsa di pomodoro", 200), new Ingredient("pasta", 150)])
      ]

      constructor(private shoppingService :ShoppingListService){

      }

    recipeSelected = new EventEmitter<Recipe>()

      getRecipes(){
        return this.recipes.slice()
      }

      getRecipe(id: number){
        const recipe = this.recipes.find(
          (r)=>{
            return r.id === id
          }
        )
        return recipe
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addIngredients(ingredients)
      }

      
}