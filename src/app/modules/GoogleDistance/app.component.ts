import { Component, ElementRef, ViewChild, OnInit, NgZone} from '@angular/core';
import { GoogleDistanceService } from './services/GoogleDistanceService';

import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

@Component({
  selector: 'google-distance',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class GoogleDistanceComponent implements OnInit {
    loading = false;
    @ViewChild("origins") origins: ElementRef;
    @ViewChild("destinations") destinations: ElementRef;

    constructor(
        private googleApi: GoogleDistanceService,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) { }

    ngOnInit() {
       //load Places Autocomplete
       this.mapsAPILoader.load().then(() => {

         let autocomplete1 = new google.maps.places.Autocomplete(this.origins.nativeElement);
         autocomplete1.addListener("place_changed", () => {
           this.ngZone.run(() => {
             //get the place result
             let place: google.maps.places.PlaceResult = autocomplete1.getPlace();
           });
         });

         let autocomplete2 = new google.maps.places.Autocomplete(this.destinations.nativeElement);
         autocomplete2.addListener("place_changed", () => {
           this.ngZone.run(() => {
             //get the place result
             let place: google.maps.places.PlaceResult = autocomplete2.getPlace();
           });
         });
       });
     }

    countDistance = () => {
        if ( this.origins.nativeElement.value && this.destinations.nativeElement.value ) {
            this.loading = true;
            this.googleApi.search(this.origins.nativeElement.value, this.destinations.nativeElement.value)
                .then( () => this.loading = false );
        } else {
            alert('Sorry, origins and destinations must be set.. :( ')
        }
    }
}
