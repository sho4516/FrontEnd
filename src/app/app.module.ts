import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./users/users.component";
import { RegistrationComponent } from "./users/registration/registration.component";
import { UserService } from "./shared/user.service";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./users/login/login.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProductsComponent } from "./Admin/products/products.component";
import { AdminComponent } from "./admin/admin.component";
import { ProductDetailComponent } from "./admin/product-detail/product-detail.component";
import { ProductUpdateComponent } from "./admin/product-update/product-update.component";
import { RouterModule } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { RefreshComponent } from "./refresh/refresh.component";
import { NoCartComponent } from "./no-cart/no-cart.component";
import { AddressComponent } from "./address/address.component";
import { DetailEditComponent } from "./detail-edit/detail-edit.component";
import { AuthGuard } from "./auth.guard";
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";
import { AddAddressComponent } from './add-address/add-address.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
};

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('204887252730-rvivlr40mfjt5dmc4he33uq4r4m84ofu.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegistrationComponent,
    LoginComponent,
    LandingPageComponent,
    ProductsComponent,
    AdminComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    CartComponent,
    RefreshComponent,
    NoCartComponent,
    AddressComponent,
    DetailEditComponent,
    AddAddressComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    RouterModule,
    SocialLoginModule
  ],
  providers: [
    UserService,
    AuthGuard,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
