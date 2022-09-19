import { Product } from './../../core/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl:
  './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products : Product[];
  constructor() {
    this.products = [];
    Array(10).fill('').map( (_, i) => this.products.push( new Product( i, `Product 00${i+1}`)));
    console.log(this.products);

   }

  ngOnInit(): void {
  }

}
