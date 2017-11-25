import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ListRecipeComponent} from './list-recipe/list-recipe.component';

export const routes: Routes = [
    { path: '', component: ListRecipeComponent },
    { path: 'dish/:id', component: RecipeDetailComponent },
    { path: '**', redirectTo: '' }
];
