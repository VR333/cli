import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { GoogleDistanceComponent } from './app.component';


@NgModule({
  declarations: [
    GoogleDistanceComponent
  ],
  imports: [
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [GoogleDistanceComponent]
})
export class GoogleDistanceModule { }
