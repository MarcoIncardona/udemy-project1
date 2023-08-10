import { Injectable } from "@angular/core"
import { Recipe } from "./recipe.model"
import { Ingredient } from "../shared/ingredient.model"
import { ShoppingListService } from "../shopping-list/shopping-list.service"
import { HttpClient } from "@angular/common/http"
import { Subject, tap} from "rxjs"

@Injectable()
export class RecipeService{
   private recipes: Recipe[]= []
    
      constructor(private shoppingService :ShoppingListService, private http: HttpClient){

      }

      onRecipeChanges = new Subject<Recipe[]>()

      onSaveRecipe(){
        this.http.put<Recipe[]>("https://udemy-project-11061-default-rtdb.europe-west1.firebasedatabase.app/recipes.json", this.recipes)
        .subscribe(response =>{
        }, error=>{
          console.log(error.message)
        })
      }

      onFetchData(){
        return this.http.get<Recipe[]>("https://udemy-project-11061-default-rtdb.europe-west1.firebasedatabase.app/recipes.json")
        .pipe(tap(response=>{
          if(!response){
            return
          }else{
            this.recipes = response
            this.onRecipeChanges.next(response)
          }
        }))
      }

      onDeleteRecipe(id:number){
        for(let i of this.recipes){
          if(i.id == id){
            const index = this.recipes.indexOf(i)
            this.recipes.splice(index, 1)
          }
        }
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
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addIngredients(ingredients)
      }

      
}