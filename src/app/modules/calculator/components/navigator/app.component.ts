import { Component } from '@angular/core';

@Component({
  selector: 'navigator',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class NavigatorComponent {
    constructor() {}
    toggle = false;
    active = "Standard";
    private CLOCK = require("./../../assets/clock.png");

    changeToggle = () => {
        this.toggle = !this.toggle;
    };
}
