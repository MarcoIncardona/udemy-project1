import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  ingredientName = ""
  ingredientAmount = 0
  err = ""

  @Output() AddIngredientEmit = new EventEmitter<{name: string, amount: number}>
  @Output() clearIngredientEmit = new EventEmitter<void>

  addIngredient(){
    this.err = ""
    if(!this.ingredientName || this.ingredientAmount === 0){
      this.err = "inserire nome e quantità!"
    }else{
      this.AddIngredientEmit.emit({
        name: this.ingredientName,
        amount: this.ingredientAmount
      })
    }
    this.ingredientName = ""
    this.ingredientAmount = 0
  }

  clearIngredient(){
    this.clearIngredientEmit.emit()
  }
}
