import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnChanges{
  recipes!: Recipe[]
  id!: number

  ngOnInit(){
    this.recipeService.onFetchData()
    this.recipes = this.recipeService.getRecipes()
    this.recipeService.onRecipeChanges.subscribe(newRecipes => {
      this.recipes = newRecipes
      console.log(newRecipes)
    })
  }

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute){

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['recipes'])
  }

  onRecipeSelect(recipe:Recipe){
    this.id = recipe.id
    this.router.navigate(["/recipes", this.id], {relativeTo: this.route})
  }

  onRecipeEdit(){
    this.router.navigate(["/recipes", this.id, "edit"], {relativeTo: this.route})
  }

}
