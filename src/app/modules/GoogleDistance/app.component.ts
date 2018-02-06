import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'google-distance',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class GoogleDistanceComponent {
    constructor(private http: Http) { }

    title = 'Api works!';
    origins = '';
    destinations = '';
    distance = '';
    key = 'AIzaSyBsMeetk8vb5UFAtlZ3A6agbV-Nr8q-UV4';


    countDistance = () => {
        this.distance = '';
        let origins = encodeURI(this.origins);
        let destinations = encodeURI(this.destinations);

        // distanceCount.getDistance(origins, destinations, this.key);

        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${this.origins}&destinations=${this.destinations}&key=${this.key}`;
        let x = new XMLHttpRequest();

        x.open('post', proxyUrl + url);
        x.send();
        console.dir(x);
        // this.distance = JSON.parse(x.responseText).rows[0].elements[0].distance.text;

        // this.http.get(proxyUrl + url)
        // .then(
        //     response => {
        //         if (response.data.rows[0].elements[0].distance === undefined) {
        //             alert('Ooops, you can`t get there by car.. :(');
        //         } else {
        //             this.distance = response.data.rows[0].elements[0].distance.text;
        //         }
        //     },
        //     error => {
        //         console.dir(error);
        //     })

        // fetch(proxyUrl + url)
        //     .then(r => r.json())
        //     .then(data => console.dir(data))
        //     .catch(e => console.log("Booo"));
    }

}
