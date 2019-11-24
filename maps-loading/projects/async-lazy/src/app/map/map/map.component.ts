import { Component, ViewChild, ElementRef } from '@angular/core';
import { Loader as GoogleMapsLoader } from '@googlemaps/loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @ViewChild('gmap', { static: true }) gmap: ElementRef<HTMLDivElement>;

  map: google.maps.Map;

  constructor(private mapsLoader: GoogleMapsLoader) { }

  async showMap() {
    await this.mapsLoader.load();
    this.map = new google.maps.Map(this.gmap.nativeElement, {
      zoom: 15,
      center: new google.maps.LatLng(52.2340641, 21.0210257)
    });
  }
}
