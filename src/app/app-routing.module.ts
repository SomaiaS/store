import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./Products/products.module').then(m => m.ProductsModule)

  },
  {
    path: '', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
