import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients :Ingredient[]= [
    new Ingredient("apple", 10),
    new Ingredient("tomatos", 5)
  ]

  onAddIngredient(data: {name:string, amount: number}){
    this.ingredients.push(data)
  }

  onClearIngredient(){
    this.ingredients = []
  }
}
