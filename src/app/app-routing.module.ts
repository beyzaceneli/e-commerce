import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path:'cart',
    loadChildren:() => import('./cart/cart.module').then(m=>m.CartModule)
  },
  {
    path:'contact',
    loadChildren:() => import('./contact/contact.module').then(m=>m.ContactModule)
  }
];

@NgModule({
  imports: [FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
