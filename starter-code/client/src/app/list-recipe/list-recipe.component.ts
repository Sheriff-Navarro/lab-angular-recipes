import { Component, OnInit, Input } from '@angular/core';
import {AlldishesService} from '../alldishes.service'

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css'],
  providers: [AlldishesService]
})
export class ListRecipeComponent implements OnInit {
  dishes;

  constructor(private dish: AlldishesService ) { }

  ngOnInit() {
    this.dish.getList()
    .subscribe((dishes) => {
        this.dishes = dishes;
    })
  }

}
