import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  {path: 'product-list', loadChildren: () => import('./products-list/product-list/product-list.module').then(m => m.ProductListModule)},

  {path: 'add-product', loadChildren: () => import('./add-product/add-product/add-product.module').then(m => m.AddProductModule)},
  {path: 'product-details', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
