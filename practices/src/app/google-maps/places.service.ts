import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/loader';

@Injectable()
export class PlacesServiceFactory {

  constructor(private readonly mapsLoader: Loader) { }

  async build(attrContainer: HTMLDivElement | google.maps.Map): Promise<PlacesServiceFacade> {
    await this.mapsLoader.load();
    const placesService = new google.maps.places.PlacesService(attrContainer);
    return {
      findPlaceFromQuery: request => {
        request = this.validate(request);
        return new Promise((resolve, reject) => {
          placesService.findPlaceFromQuery(request, (result, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              resolve(result);
            } else {
              reject(status);
            }
          });
        });
      }
    };
  }

  validate(request: google.maps.places.FindPlaceFromQueryRequest): google.maps.places.FindPlaceFromQueryRequest {
    if (request.fields.length === 0) {
      request.fields.push('place_id', 'formatted_address');
    }
    return request;
  }
}

export interface PlacesServiceFacade {
  findPlaceFromQuery(request: google.maps.places.FindPlaceFromQueryRequest): Promise<google.maps.places.PlaceResult[]>;
}
