import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
// MatToolbarModule,
//  MatIconModule, 
//  MatSidenavModule,
//   MatListModule,
//    MatButtonModule,
BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
