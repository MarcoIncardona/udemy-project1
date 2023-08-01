import { Component, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  recipes: Recipe[] = [];
  id!: number

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes()
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
}
