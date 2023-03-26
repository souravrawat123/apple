import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './apple/cart/cart.component';
import { ErrorComponent } from './apple/error/error.component';
import { IphoneComponent } from './apple/iphone/iphone.component';
import { StoreComponent } from './apple/store/store.component';
import { SupportComponent } from './apple/support/support.component';

const routes: Routes = [
  { path: '', redirectTo: 'iphone', pathMatch: 'full' },
  { path: 'iphone', title: 'welcome', component: IphoneComponent },
  { path: 'store', title: 'store', component: StoreComponent },
  { path: 'support', title: 'support', component: SupportComponent },
  { path: 'cart', title: 'card', component: CartComponent },
  { path: '**', title: 'page not found', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
