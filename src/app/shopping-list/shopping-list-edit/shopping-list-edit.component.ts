import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  ingredientName = ""
  ingredientAmount = 0
  err = ""

  constructor(private shoppingService: ShoppingListService){

  }

  addIngredient(){
    this.err = ""
    if(!this.ingredientName || this.ingredientAmount === 0){
      this.err = "inserire nome e quantità!"
    }else{
      this.shoppingService.onAddIngredient(this.ingredientName, this.ingredientAmount)     
    }
    this.ingredientName = ""
    this.ingredientAmount = 0
  }

  clearIngredient(){
    this.shoppingService.onClearIngredients();
  }
}
