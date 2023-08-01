import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  recipe: any
  ingredients: Ingredient[] = []
  ingredientName: string = ""
  ingredientAmount: number = 0
  id: number = 0
  

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.recipe = this.recipeService.getRecipe(+params["id"])
        this.ingredients = this.recipe.ingredients
        this.id = params["id"]
      }
    )
  }

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService){
    
  }

  onSaveEdit(name: string , description: string , url: string){
    this.recipeService.editRecipe(this.id, name, description, url, this.ingredients)
    this.router.navigate(["recipes", this.id])
  }

  onDeleteIngredient(index: number){
    this.ingredients.splice(index, 1)
  }

  onAddIngredient(){
    this.ingredients.push({name: this.ingredientName, amount: this.ingredientAmount})
  }

  onClear(){
    this.ingredients = []
  }

}
