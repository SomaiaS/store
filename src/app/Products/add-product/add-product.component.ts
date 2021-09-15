import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../http/ProductModel.class";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: ProductModel = new ProductModel();

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  AddProduct(event:any) {
    debugger
    let url = 'https://fakestoreapi.com/products';
     this._http.post(url, JSON.stringify(this.product),
      ).subscribe((response: any) => {
        debugger
       window.alert("Product saved successfully")
       // this.success(event.target)
      });
  }

  // success(target:any) {
  //   this.confirmationService.confirm({
  //     target: target,
  //     message: 'Are you sure that you want to proceed?',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       //confirm action
  //     },
  //     reject: () => {
  //       //reject action
  //     }
  //   });
  // }
  onTitlChange(title:string) {
    this.product.title = title;
  }
  onDecr(des:string) {
    this.product.description = des;
  }
  onimgChange(val:string) {
    this.product.image = val;
  }
  onpricrChange(val:string) {
    this.product.price = parseInt(val);
  }
  onCategoryChange(val:string) {
    this.product.category = val;
  }
}
