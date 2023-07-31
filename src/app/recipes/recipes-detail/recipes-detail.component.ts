import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit{
  recipeData!: any
  dropDownStatus = false

  constructor(private recipeService: RecipeService, private route : ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) =>{
        this.recipeData = this.recipeService.getRecipe(+params["id"])
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeData.ingredients)
    this.dropDownStatus = false
  }

  openDropdown(){
    if(!this.dropDownStatus){
      this.dropDownStatus = true
    }else{
      this.dropDownStatus = false
    }
  }
}
