import { Component,OnInit} from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit{
  recipeData! : any
  dropDownStatus = false
  id!:number

  constructor(private recipeService: RecipeService, private route : ActivatedRoute, private router: Router){

  }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) =>{
        this.recipeData = this.recipeService.getRecipe(+params["id"])
        this.id = params["id"]
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeData.ingredients)
    this.dropDownStatus = false
    this.router.navigate(["/shopping-list"])
  }

  openDropdown(){
    if(!this.dropDownStatus){
      this.dropDownStatus = true
    }else{
      this.dropDownStatus = false
    }
  }

  deleteRecipe(){
    this.recipeService.onDeleteRecipe(this.id)
    this.router.navigate(["/recipes"])
  }

  
}
