import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChangeSub!: Subscription;
  
  constructor(private shoppingService: ShoppingListService){

  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients()
    this.igChangeSub = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients
      }
    )   
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()
  }

  onDeleteIngredient(index: number){
    this.ingredients.splice(index, 1)
  }
}
