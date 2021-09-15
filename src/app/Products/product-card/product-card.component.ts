import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../http/ProductModel.class";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: ProductModel = new ProductModel();
  constructor() { }

  ngOnInit(): void {
  }

}
