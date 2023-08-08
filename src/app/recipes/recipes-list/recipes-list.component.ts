import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy{
  recipes!: Recipe[]
  id!: number
  private recipeSub!: Subscription
  
  ngOnInit(){
    this.recipes = this.recipeService.getRecipes()
    this.recipeService.onFetchData()   
    this.recipeSub = this.recipeService.onRecipeChanges.subscribe(newRecipes => {
      this.recipes = newRecipes
    })
  }
  
  
  
  
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute){
    
  }
  
  
  onRecipeSelect(recipe:Recipe){
    this.id = recipe.id
    this.router.navigate(["/recipes", this.id], {relativeTo: this.route})
  }
  
  onRecipeEdit(){
    this.router.navigate(["/recipes", this.id, "edit"], {relativeTo: this.route})
  }
  
  ngOnDestroy(): void {
    this.recipeSub.unsubscribe()
  }

}
