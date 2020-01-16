import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/loader';

@Injectable()
export class MapService {
  constructor(private readonly mapsLoader: Loader) {
  }

  async createMap(mapDiv: Element, opts: google.maps.MapOptions = {}): Promise<google.maps.Map> {
    await this.mapsLoader.load();
    return new google.maps.Map(mapDiv, opts);
  }
}
