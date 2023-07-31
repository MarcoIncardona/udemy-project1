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

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute){

  }

  onRecipeSelect(recipe:Recipe){
    this.router.navigate(["/recipes", recipe.id], {relativeTo: this.route})
  }
}
