import { Component } from '@angular/core';
import { CalculatorService } from './../../services/CalculatorService';

@Component({
  selector: 'display',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class DisplayComponent {
    constructor(private calculate: CalculatorService) {}
}
