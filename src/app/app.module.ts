import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInterceptor } from './services/custom.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { profileReducer } from './reducer/profile.reducer';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardProductsComponent } from './components/dashboard/dashboard-products/dashboard-products.component';
import { DashboardUsersComponent } from './components/dashboard/dashboard-users/dashboard-users.component';
import { DashboardAddProductComponent } from './components/dashboard/dashboard-add-product/dashboard-add-product.component';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    ThankYouComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DashboardProductsComponent,
    DashboardUsersComponent,
    DashboardAddProductComponent,
    DashboardHomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ profile: profileReducer })
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS, useClass : CustomInterceptor, multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
