import { NgModule } from '@angular/core';
import {environment} from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from './data.service';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { BsDropdownComponent } from './bs-dropdown/bs-dropdown.component'; 
import {AngularFireModule} from '@angular/fire';
@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ProductsComponent, ShoppingCartComponent, CheckOutComponent, OrderSuccessComponent, MyOrdersComponent, AdminProductsComponent, AdminOrdersComponent, LoginComponent, BsNavbarComponent, BsDropdownComponent],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, //hhtp client service can be used across the app
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    //NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent },
      { path: 'order-success', component: OrderSuccessComponent },
      { path: 'my/orders', component: MyOrdersComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin/products', component: AdminProductsComponent },
      { path: 'admin/orders', component: AdminOrdersComponent }
    ])

  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
