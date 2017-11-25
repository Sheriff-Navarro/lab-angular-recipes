import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AlldishesService} from './alldishes.service';
import { AppComponent } from './app.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipeComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AlldishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
