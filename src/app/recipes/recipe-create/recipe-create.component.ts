import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent {
  recipeName:string = ""
  recipeDescription: string = ""
  recipeUrl: string = ""
  ingredients: Ingredient[] = []
  ingredientName:string = ""
  ingredientAmount:number  = 0
  err: string = ""
  ingredientErr: string = ""

  constructor(private recipeService: RecipeService){}

  onAddRecipe(){
    this.err = ""
    if(!this.recipeName || !this.recipeDescription || !this.recipeUrl){
      this.err = "Riempi tutti i campi!"
    }else{
      this.recipeService.addRecipe(this.recipeName, this.recipeDescription, this.recipeUrl, this.ingredients)
      this.recipeName = "";
      this.recipeDescription = "";
      this.recipeUrl = "";
    }
  }

  onAddIngredients(){
    this.ingredientErr = ""
    if(!this.ingredientAmount || !this.ingredientName){
      this.ingredientErr = "inserire ingrediente e quantità!"
    }else{
      this.ingredients.push({name: this.ingredientName, amount: this.ingredientAmount});
      this.ingredientName = "";
      this.ingredientAmount = 0
    }
  }

  onClearIngredients(){
    this.ingredients = []
    console.log(this.ingredients)
  }
}
