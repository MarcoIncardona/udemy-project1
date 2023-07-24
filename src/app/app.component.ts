import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  recipeStatus = true
  shoppingStatus = false
  
  onRecipeOpened(status: any){
    if(status = true){
      this.recipeStatus = status
      this.shoppingStatus = false
    }else{
      this.recipeStatus = status
    }
  }

  onShoppingOpened(status: any){
    if(status = true){
      this.shoppingStatus = status
      this.recipeStatus = false      
    }else{
      this.shoppingStatus = status
    }
  }
}
