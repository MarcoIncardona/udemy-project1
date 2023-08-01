import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { EmptyComponentComponent } from "./empty-component/empty-component.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeCreateComponent } from "./recipes/recipe-create/recipe-create.component";

const appRoutes: Routes = [
    { path: "", component: EmptyComponentComponent},
    { path: "recipes", component: RecipesComponent, children:[
        {path: "", component: RecipeStartComponent},
        {path: "create", component: RecipeCreateComponent},
        {path: ":id", component: RecipesDetailComponent},
        {path: ":id/edit", component: RecipeEditComponent}
    ]},
    { path: "shopping-list", component: ShoppingListComponent},
    
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}