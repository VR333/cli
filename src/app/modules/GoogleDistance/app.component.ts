import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { GoogleDistanceService } from './services/GoogleDistanceService';
import { } from '@types/googlemaps';

@Component({
  selector: 'google-distance',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class GoogleDistanceComponent implements OnInit{
    loading = false;
    origins = '';
    destinations = '';
    @ViewChild('search1') public searchElement: ElementRef;

    constructor(
        private googleApi: GoogleDistanceService,
        private ngZone: NgZone
    ) { }

    ngOnInit () {}

    countDistance = () => {
        this.loading = true;
        this.googleApi.search(this.origins, this.destinations)
            .then( () => this.loading = false );
    }

}
