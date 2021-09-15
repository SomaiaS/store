import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import {ProductsListComponent} from "../products-list.component";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ProductsModule} from "../../products.module";


@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule, RatingModule, FormsModule, ProgressSpinnerModule, ProductsModule
  ]
})
export class ProductListModule { }
