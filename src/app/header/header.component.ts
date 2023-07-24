import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() recipeOpened: EventEmitter<boolean> = new EventEmitter()
  @Output() shoppingOpened: EventEmitter<boolean> = new EventEmitter()
  recipeStatus: boolean = false
  shoppingStatus = false

  openRecipe(){
    if(!this.recipeStatus){
      this.recipeStatus = true
      this.recipeOpened.emit(this.recipeStatus)
    }else{
      this.recipeStatus = false
      this.recipeOpened.emit(this.recipeStatus)
    }
  }

  openShopping(){
    if(!this.shoppingStatus){
      this.shoppingStatus = true
      this.shoppingOpened.emit(this.shoppingStatus)
    }else{
      this.shoppingStatus = false
      this.shoppingOpened.emit(this.shoppingStatus)
    }
  }

}
