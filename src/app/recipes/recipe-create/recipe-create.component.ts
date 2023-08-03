import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent {
  defaultImage = "https://luigispizzakenosha.com/wp-content/uploads/placeholder.png"
  ingredients: Ingredient[] = []
 

  constructor(private recipeService: RecipeService){}

  onAddRecipe(data: NgForm){
    console.log(data.value)
    this.recipeService.addRecipe(data.value.recipeName, data.value.description, data.value.url, this.ingredients)
    data.reset()
  }

  onAddIngredient(data: NgForm){
    this.ingredients.push({name: data.value.ingredient, amount: data.value.amount})
    data.reset()
  }

  onClearIngredients(){
    this.ingredients = []
    console.log(this.ingredients)
  }
}
