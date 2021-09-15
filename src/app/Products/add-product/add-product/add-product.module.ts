import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddProductRoutingModule} from './add-product-routing.module';
import {AddProductComponent} from "../add-product.component";
// import {ConfirmPopupModule} from "primeng/confirmpopup";


@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    // ConfirmPopupModule
  ]
})
export class AddProductModule {
}
