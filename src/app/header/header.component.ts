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
  dropDownStatus = false

 

  openDropdown(){
    if(!this.dropDownStatus){
      this.dropDownStatus = true
    }else{
      this.dropDownStatus = false
    }
  }

}
