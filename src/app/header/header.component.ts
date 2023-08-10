import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropDownStatus = false

  constructor(private recipeService: RecipeService){}

  openDropdown(){
    if(!this.dropDownStatus){
      this.dropDownStatus = true
    }else{
      this.dropDownStatus = false
    }
  }

  saveData(){
    this.recipeService.onSaveRecipe()
  }

  fetchData(){
    this.recipeService.onFetchData().subscribe()
  }

}
