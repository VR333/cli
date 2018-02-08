import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuComponent {
    @Input('active') active: string;
    @Output() activeChange = new EventEmitter();
    
    list = [
        {
            name: 'Calculator',
            type: 'roomless'
        },
        {
            name: 'Standard',
            type: 'version'
        },
        {
            name: 'Scientific',
            type: 'version'
        },
        {
            name: 'Programmer',
            type: 'version'
        },
        {
            name: 'Date calculation',
            type: 'version'
        },
        {
            name: 'Converter',
            type: 'title'
        },
        {
            name: 'Currency',
            type: 'version'
        },
        {
            name: 'Volume',
            type: 'version'
        },
        {
            name: 'Length',
            type: 'version'
        },
        {
            name: 'Weight and Mass',
            type: 'version'
        },
        {
            name: 'Temperature',
            type: 'version'
        },
        {
            name: 'Energy',
            type: 'version'
        },
        {
            name: 'Area',
            type: 'version'
        },
        {
            name: 'Speed',
            type: 'version'
        },
        {
            name: 'Time',
            type: 'version'
        },
        {
            name: 'Power',
            type: 'version'
        },
        {
            name: 'Data',
            type: 'version'
        },
        {
            name: 'Pressure',
            type: 'version'
        },
        {
            name: 'Angle',
            type: 'version'
        }
    ];

    makeActiveTab = (item) => {
        this.active = item;
        this.activeChange.emit(this.active);
    };
}
