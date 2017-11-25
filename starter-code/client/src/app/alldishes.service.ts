import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import * as _ from 'underscore';
import 'rxjs/add/operator/map';

@Injectable()
export class AlldishesService {
  BASE_URL: string = 'http://localhost:3000';
  dishes: Object[] = [];


  constructor(private http: Http) { }

getList() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }

// getDishes() {
//   return this.dishes;
// }

getDish(id: Number):Object{
  return this.dishes.find(x=> x['id'] === id);
}

get(id) {
   return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
     .map((res) => res.json());
 }

}
