import { Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs';

@Injectable()
export class GoogleDistanceService {
  key = 'AIzaSyBsMeetk8vb5UFAtlZ3A6agbV-Nr8q-UV4';
  distance = '';

  constructor (private http: Http) {}

  search(origin: string, destination: string) {
      let origins = encodeURI(origin);
      let destinations = encodeURI(destination);
      let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      let url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${this.key}`;

      // need to find out how to use multiple subscribe usage
      // let x = this.http.get(proxyUrl + url)
      //   .subscribe(
      //       r => console.dir(r.json()),
      //       e => console.log('good luck')
      //   ).subscribe(
      //       a => alert(a)
      //   )

      let promise = new Promise((resolve, reject) => {
          this.http.get(proxyUrl + url)
              .toPromise()
              .then(
                  response => {
                      if (response.json().rows[0].elements[0].distance === undefined) {
                          alert('Ooops, you can`t get there by car.. :( ');
                      } else {
                          this.distance = response.json().rows[0].elements[0].distance.text;
                      }
                      resolve();
                  },
                  error => {
                      console.log(error);
                      reject();
                  }
              );
      });
      return promise;
  }

}
