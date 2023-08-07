import { Injectable } from "@angular/core"
import { Recipe } from "./recipe.model"
import { Ingredient } from "../shared/ingredient.model"
import { ShoppingListService } from "../shopping-list/shopping-list.service"
import { Subject } from "rxjs"

@Injectable()
export class RecipeService{
   private recipes: Recipe[] = [
        new Recipe(1, "Carbonara", "ricetta pasta italiana", "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg", [new Ingredient("uova", 3), new Ingredient("pecorino", 10), new Ingredient("pasta", 100)]),
        new Recipe(2, "cacio e pepe", "altra ricetta italiana", "https://www.giallozafferano.it/images/ricette/219/21989/foto_hd/hd650x433_wm.jpg", [new Ingredient("pepe", 3), new Ingredient("formaggio", 5), new Ingredient("pasta", 100)]),
        new Recipe(3, "alla norma", "un'altra pasta italiana", "https://www.giallozafferano.it/images/179-17902/Spaghetti-alla-Norma_650x433_wm.jpg", [new Ingredient("melanzane", 2), new Ingredient("salsa di pomodoro", 200), new Ingredient("pasta", 150)])
      ]

    

      onDeleteRecipe(id:number){
        for(let i of this.recipes){
          if(i.id == id){
            const index = this.recipes.indexOf(i)
            this.recipes.splice(index, 1)
          }
        }
      }
      
      constructor(private shoppingService :ShoppingListService){

      }

      editRecipe(id: number, name: string, description: string, url: string, ingredients:Ingredient[]){
        this.recipes[id - 1].name = name
        this.recipes[id - 1].description = description
        this.recipes[id - 1].imagePath = url
        this.recipes[id - 1].ingredients = ingredients
      }

      getRecipes(){
        return this.recipes
      }

      getRecipe(id: number){
        const recipe = this.recipes.find(
          (r)=>{
            return r.id === id
          }
        )
        return recipe
      }


      addRecipe(name: string, description: string, url: string, ingredients: Ingredient[]){
        this.recipes.push(new Recipe(this.recipes.length == 0 ? 1 : this.recipes[this.recipes.length-1].id +1, name, description, url, ingredients))
        console.log(this.recipes)
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addIngredients(ingredients)
      }

      
}