import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GoogleMapsLoaderService } from './google-maps/google-maps-loader/google-maps-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('gmap', { static: true }) gmap: ElementRef<HTMLDivElement>;

  map: google.maps.Map;

  constructor(private mapsLoader: GoogleMapsLoaderService) { }

  ngAfterViewInit(): void {
    this.mapsLoader.load().then(() => {
      this.map = new google.maps.Map(this.gmap.nativeElement, {
        zoom: 15,
        center: new google.maps.LatLng(52.2340641, 21.0210257),
      });
    });
  }
}
