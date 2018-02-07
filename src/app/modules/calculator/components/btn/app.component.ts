import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn  ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class BtnComponent {
    @Input('type') type: string ;
    @Input('value') value: string ;
    @Input('tooltip') tooltip: string ;
}
