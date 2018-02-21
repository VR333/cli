import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routes.module';
import { HttpModule } from '@angular/http';

import { CalculatorModule } from './modules/calculator/app.module';
import { GoogleDistanceModule } from './modules/GoogleDistance/app.module';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HomeComponent }   from './home/app.component';
import { Error404Component }   from './error404/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule,
    GoogleDistanceModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBsMeetk8vb5UFAtlZ3A6agbV-Nr8q-UV4",
      libraries: ["places"]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
