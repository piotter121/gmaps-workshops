import { Injectable } from '@angular/core';
import { Loader as GoogleMapsLoader } from '@googlemaps/loader';

@Injectable()
export class GeocoderService {
  private geocoderInstance?: google.maps.Geocoder;

  constructor(private readonly mapsLoader: GoogleMapsLoader) { }

  async geocode(request: google.maps.GeocoderRequest): Promise<google.maps.GeocoderResult[]> {
    const geocoder = await this.getGeocoderInstance();
    return new Promise((resolve, reject) => {
      geocoder.geocode(request, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }
      });
    });
  }

  private async getGeocoderInstance(): Promise<google.maps.Geocoder> {
    if (this.geocoderInstance === undefined) {
      await this.mapsLoader.load();
      this.geocoderInstance = new google.maps.Geocoder();
    }
    return this.geocoderInstance;
  }
}
