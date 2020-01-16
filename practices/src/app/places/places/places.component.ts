import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PlacesServiceFactory } from 'src/app/google-maps/places.service';
import { MapService } from 'src/app/google-maps/map.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements AfterViewInit {
  @ViewChild('map', {static: false}) mapElement: ElementRef<HTMLDivElement>;

  query: string;
  results$: Promise<google.maps.places.PlaceResult[]>;

  private map: google.maps.Map;

  constructor(private readonly placesServiceFactory: PlacesServiceFactory,
              private readonly mapService: MapService) { }

  ngAfterViewInit() {
    this.createMap();
  }

  async onSubmit() {
    const placesService = await this.placesServiceFactory.build(this.map);
    this.results$ = placesService.findPlaceFromQuery({query: this.query, fields: []});
  }

  private async createMap() {
    this.map = await this.mapService.createMap(this.mapElement.nativeElement, {
      center: {
        lat: 52,
        lng: 21
      },
      zoom: 10
    });
  }

}
