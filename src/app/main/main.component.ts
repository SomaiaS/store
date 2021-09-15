import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private _router: Router){}

  navigateProductList() {
    this._router.navigateByUrl("/products/product-list");
  }

  navigateToAddProduct() {
    this._router.navigateByUrl("/products/add-product");
  }

  ngOnInit(): void {
  }

}
