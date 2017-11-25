import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {AlldishesService} from '../alldishes.service'


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [AlldishesService]
})
export class RecipeDetailComponent implements OnInit {
  dish: any;
  constructor(
    private route: ActivatedRoute,
    private dishService: AlldishesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetails(params['id']);
    })
  }

  getDishDetails(id) {
    this.dishService.get(id)
    .subscribe((dish) => {
      this.dish = dish;
    })
  }


}
