import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CalculatorComponent } from './app.component';

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [FormsModule],
  providers: [],
  bootstrap: [CalculatorComponent]
})
export class CalculatorModule { }
