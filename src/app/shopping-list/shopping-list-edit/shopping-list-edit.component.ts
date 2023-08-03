import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  

  constructor(private shoppingService: ShoppingListService){

  }

  addIngredient(data: NgForm){  
    this.shoppingService.onAddIngredient(data.value.ingredient, data.value.amount)  
    data.reset()   
  }

  clearIngredient(){
    this.shoppingService.onClearIngredients();
  }

  RemoveIngredient(){

  }
}
