import { Component, Input } from '@angular/core';
import { CalculatorService } from './../../services/CalculatorService';

@Component({
  selector: 'btn  ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class BtnComponent {
    constructor(private calculate: CalculatorService) {}
    @Input('type') type: string;
    @Input('value') value: string;
    @Input('tooltip') tooltip: string;

    handleClick() {
      this.calculate.btnClick(this.type, this.value);
    }
}
