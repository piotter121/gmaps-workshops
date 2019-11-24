import { Injectable } from '@angular/core';
import { Loader as GoogleMapsLoader } from '@googlemaps/loader';
import { Observable, Subscriber } from 'rxjs';

@Injectable()
export class GeocoderService {
  private geocoder?: google.maps.Geocoder;

  constructor(private mapsLoader: GoogleMapsLoader) { }

  geocode(request: google.maps.GeocoderRequest): Observable<google.maps.GeocoderResult[]> {
    return new Observable((subscriber: Subscriber<google.maps.GeocoderResult[]>) => {
      this.getGeocoder().then(geocoder => {
        geocoder.geocode(request, (results, status) => {
          if (status !== google.maps.GeocoderStatus.OK) {
            subscriber.error(status);
          } else {
            subscriber.next(results);
          }
          subscriber.complete();
        });
      });
    });
  }

  private async getGeocoder(): Promise<google.maps.Geocoder> {
    if (!this.geocoder) {
      await this.mapsLoader.load();
      this.geocoder = new google.maps.Geocoder();
    }
    return this.geocoder;
  }
}
