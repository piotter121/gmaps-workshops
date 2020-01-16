import { Component } from '@angular/core';
import { GeocoderService } from '../google-maps/geocoder.service';

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.component.html',
  styleUrls: ['./geocoding.component.scss']
})
export class GeocodingComponent {
  address: string;

  results$: Promise<google.maps.GeocoderResult[]>;
  errorMessage?: string;

  lat: number;
  lng: number;
  reverseGeocodeResults$: Promise<google.maps.GeocoderResult[]>;
  reverseGeocodeErrorMessage?: string;

  constructor(private readonly geocoder: GeocoderService) { }

  onSubmit(): void {
    delete this.errorMessage;
    this.results$ = this.geocoder.geocode({ address: this.address })
      .catch((status: google.maps.GeocoderStatus) => {
        this.errorMessage = `Otrzymano następujący status: ${status}`;
        return [];
      });
  }

  onReverseGeocodeSubmit(): void {
    delete this.reverseGeocodeErrorMessage;
    this.reverseGeocodeResults$ = this.geocoder.geocode({location: {lat: this.lat, lng: this.lng}})
      .catch((status: google.maps.GeocoderStatus) => {
        this.reverseGeocodeErrorMessage = `Otrzymano następujący status: ${status}`;
        return [];
      });
  }
}
