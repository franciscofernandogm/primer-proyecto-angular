import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from './pages/contact/contact.component'
import {ProductComponent} from './pages/product/product.component'

const routes: Routes = [
  {
    path:'',
    component:ProductComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
