import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { LoginComponent } from './users/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './Admin/products/products.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { ProductUpdateComponent } from './admin/product-update/product-update.component';
import { CartComponent } from './cart/cart.component';
import { RefreshComponent } from './refresh/refresh.component';
import { NoCartComponent } from './no-cart/no-cart.component';
import { AddressComponent } from './address/address.component';
import { DetailEditComponent } from './detail-edit/detail-edit.component';
import { AuthGuard } from './auth.guard';
import { AddAddressComponent } from './add-address/add-address.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {path: '', redirectTo: '/Land', pathMatch: 'full'},
  { path: 'users', component: UsersComponent,
  children:
  [
    { path: 'registration', component : RegistrationComponent },
    { path: 'Login', component : LoginComponent }
  ]
  },
  {path: 'Land', component : LandingPageComponent},
  {path: 'Admin', component : AdminComponent,
  children:
  [
    {path: 'products', component : ProductsComponent, canActivate: [AuthGuard]},
    {path : 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuard]},
    {path : 'productsUpdate/:id', component: ProductUpdateComponent, canActivate: [AuthGuard]}

  ]},
  {path: 'cart', component: CartComponent},
  {path: 'Refresh', component: RefreshComponent},
  {path: 'noCart', component: NoCartComponent},
  {path: 'address', component: AddressComponent, canActivate: [AuthGuard]},
  { path: 'DetailEdit/:id', component: DetailEditComponent},
  { path: 'addAddress', component: AddAddressComponent},
  { path: 'orderSummary', component: OrderSummaryComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
