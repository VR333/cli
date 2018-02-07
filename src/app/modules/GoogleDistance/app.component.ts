import { Component } from '@angular/core';
import { GoogleDistanceService } from './services/GoogleDistanceService';
// import { } from '@types/googlemaps';

@Component({
  selector: 'google-distance',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class GoogleDistanceComponent{
    loading = false;
    origins = '';
    destinations = '';

    constructor(private googleApi: GoogleDistanceService) { }

    countDistance = () => {
        this.loading = true;
        this.googleApi.search(this.origins, this.destinations)
            .then( () => this.loading = false );
    }

}
