import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routes.module';
import { HttpModule } from '@angular/http';

import { CalculatorModule } from './modules/calculator/app.module';
import { GoogleDistanceModule } from './modules/GoogleDistance/app.module';


import { AppComponent } from './app.component';
import { HomeComponent }   from './home/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule,
    GoogleDistanceModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
