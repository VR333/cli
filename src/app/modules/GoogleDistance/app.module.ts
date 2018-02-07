import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GoogleDistanceService } from './services/GoogleDistanceService';
import { CommonModule } from "@angular/common";


import { GoogleDistanceComponent } from './app.component';


@NgModule({
  declarations: [
    GoogleDistanceComponent
  ],
  imports: [
      FormsModule,
      HttpModule,
      CommonModule
  ],
  providers: [GoogleDistanceService],
  bootstrap: [GoogleDistanceComponent]
})
export class GoogleDistanceModule { }
