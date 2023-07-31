import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { EmptyComponentComponent } from "./empty-component/empty-component.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";

const appRoutes: Routes = [
    { path: "", component: EmptyComponentComponent},
    { path: "recipes", component: RecipesComponent, children:[
        {path: ":id", component: RecipesDetailComponent}
    ]},
    { path: "shopping-list", component: ShoppingListComponent},
    
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}