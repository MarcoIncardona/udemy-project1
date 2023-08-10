import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { EmptyComponentComponent } from "./empty-component/empty-component.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeCreateComponent } from "./recipes/recipe-create/recipe-create.component";
import { RecipeResolverService } from "./recipes/recipes-resolver.service";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
    { path: "", component: EmptyComponentComponent},
    { path: "recipes", component: RecipesComponent,resolve:[RecipeResolverService] ,children:[
        {path: "", component: RecipeStartComponent},
        {path: "create", component: RecipeCreateComponent},
        {path: ":id", component: RecipesDetailComponent, resolve:[RecipeResolverService]},
        {path: ":id/edit", component: RecipeEditComponent, resolve:[RecipeResolverService] }
    ]},
    { path: "shopping-list", component: ShoppingListComponent},
    { path: "login", component: AuthComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}