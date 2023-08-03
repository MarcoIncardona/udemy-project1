import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  recipe: any
  defaultRecipeName = ""
  defaultRecipeDescription = ""
  defaultRecipeUrl = ""
  ingredients: Ingredient[] = []
  id: number = 0
  

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.recipe = this.recipeService.getRecipe(+params["id"])
        this.ingredients = this.recipe.ingredients
        this.id = params["id"]
        this.defaultRecipeName = this.recipe.name
        this.defaultRecipeDescription = this.recipe.description
        this.defaultRecipeUrl = this.recipe.imagePath
      }
    )
  }

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService){
    
  }

  onSaveEdit(data: NgForm){
    this.recipeService.editRecipe(this.id, data.value.recipeName, data.value.description, data.value.url, this.ingredients)
    data.reset()
    this.router.navigate(["recipes", this.id])
  }

  onDeleteIngredient(index: number){
    this.ingredients.splice(index, 1)
  }

  onAddIngredient(data: NgForm){
    this.ingredients.push({name: data.value.ingredient, amount: data.value.amount})
    data.reset()
  }

  onClear(){
    this.ingredients = []
  }

}
