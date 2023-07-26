import { Component, Input} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {
  @Input() recipeData!: Recipe


  dropDownStatus = false

  openDropdown(){
    if(!this.dropDownStatus){
      this.dropDownStatus = true
    }else{
      this.dropDownStatus = false
    }
  }
}
