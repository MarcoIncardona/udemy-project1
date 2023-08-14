import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  dropDownStatus = false
  private userSub!: Subscription
  isAuthenticated = false

  constructor(private recipeService: RecipeService, private authService: AuthService){}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user =>{
      this.isAuthenticated = !user ? false : true
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }

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

  onLogout(){
    this.authService.logout()
  }

}
