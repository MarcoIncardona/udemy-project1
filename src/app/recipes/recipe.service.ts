import { EventEmitter } from "@angular/core"
import { Recipe } from "./recipe.model"

export class RecipeService{
   private recipes: Recipe[] = [
        new Recipe("Carbonara", "ricetta pasta italiana", "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg"),
        new Recipe("cacio e pepe", "altra ricetta italiana", "https://www.giallozafferano.it/images/ricette/219/21989/foto_hd/hd650x433_wm.jpg")
      ]

    recipeSelected = new EventEmitter<Recipe>()

      getRecipe(){
        return this.recipes.slice()
      }

      
}