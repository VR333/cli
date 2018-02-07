import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculatorService } from './services/CalculatorService';

import { CalculatorComponent } from './app.component';
import { HeaderComponent } from './components/header/app.component';
import { NavigatorComponent } from './components/navigator/app.component';
import { MenuComponent } from './components/menu/app.component';
import { DisplayComponent } from './components/display/app.component';
import { KeyboardComponent } from './components/keyboard/app.component';
import { BtnComponent } from './components/btn/app.component';



@NgModule({
  declarations: [
    CalculatorComponent,
    HeaderComponent,
    NavigatorComponent,
    MenuComponent,
    DisplayComponent,
    KeyboardComponent,
    BtnComponent
  ],
  imports: [
      FormsModule,
      CommonModule
  ],
  providers: [CalculatorService],
  bootstrap: [CalculatorComponent]
})
export class CalculatorModule { }
