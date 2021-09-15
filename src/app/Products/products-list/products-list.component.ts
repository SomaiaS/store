import { Component, OnInit } from '@angular/core';
import {APIsCallService} from "../http/apis-call.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers:[APIsCallService]

})
export class ProductsListComponent implements OnInit {
   products:any;
   isProductsLoaded: boolean = false;

  constructor(private _http: HttpClient) {
    debugger
  }

  ngOnInit(): void {
    this.getProductsWithLimit('10');
  }

  getHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8'
      })
    }
  }
  getProductsWithLimit(limit:string) {
    debugger
    let productsListWithLimit = "https://fakestoreapi.com/products?limit=" + limit
    return this._http.get<any>(productsListWithLimit + limit,
      this.getHeader()).subscribe((response: any) => {
      debugger
      this.products = response;
      this.isProductsLoaded = true;
    });
  }
}
