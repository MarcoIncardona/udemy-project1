import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe("Carbonara", "ricetta pasta italiana", "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg"),
    new Recipe("cacio e pepe", "altra ricetta italiana", "https://www.giallozafferano.it/images/ricette/219/21989/foto_hd/hd650x433_wm.jpg")
  ]

  @Output() recipeRecived = new EventEmitter<Recipe>

  

  onRecipeOpened(recipeData: Recipe){
    this.recipeRecived.emit({
      name: recipeData.name,
      description : recipeData.description,
      imagePath: recipeData.imagePath
    })
  }
}
