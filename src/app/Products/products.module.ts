import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AddProductComponent} from './add-product/add-product.component';
import {ProductsListComponent} from "./products-list/products-list.component";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {APIsCallService} from "./http/apis-call.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductCardComponent} from './product-card/product-card.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule, HttpClientModule,
    ProgressSpinnerModule
  ],
  exports: [
    ProductCardComponent
  ],
  providers: [APIsCallService]
})
export class ProductsModule {
}
