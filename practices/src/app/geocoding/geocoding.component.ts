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

  constructor(private geocoder: GeocoderService) { }

  onSubmit(): void {
    delete this.errorMessage;
    this.results$ = this.geocoder.geocode({ address: this.address })
      .catch((status: google.maps.GeocoderStatus) => {
        this.errorMessage = `Otrzymano następujący status: ${status}`;
        return [];
      });
  }
}
