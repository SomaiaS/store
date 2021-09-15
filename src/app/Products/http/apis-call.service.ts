import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, shareReplay} from "rxjs/operators";
import {ProductModel} from "./ProductModel.class";

const BaseURL = "https://fakestoreapi.com/";
const ProductsListWithLimit = BaseURL + "products?limit=";
const Product = BaseURL + +"products/";

@Injectable()
export class APIsCallService {

  constructor(private _http: HttpClient) {
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
    return this._http.get<any>(ProductsListWithLimit + limit,
      this.getHeader()).subscribe((response: any) => {
        debugger
      });
  }

  getProductDetails(productId: string) {
    return this._http.get(Product + productId,
      this.getHeader()).pipe(map((response: any) => {
      }),
    ).pipe(shareReplay(1));
  }

  addNewProduct(product: ProductModel) {
    return this._http.post(Product, JSON.stringify(product),
      this.getHeader()).pipe(map((response: any) => {
      }),
    ).pipe(shareReplay(1));
  }
}
