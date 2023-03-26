import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IphoneComponent } from './apple/iphone/iphone.component';
import { StoreComponent } from './apple/store/store.component';
import { SupportComponent } from './apple/support/support.component';
import { CartComponent } from './apple/cart/cart.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorComponent } from './apple/error/error.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IphoneComponent,
    StoreComponent,
    SupportComponent,
    CartComponent,

    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
