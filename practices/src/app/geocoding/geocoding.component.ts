import { Component } from '@angular/core';
import { GeocoderService } from '../google-maps/geocoder.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.component.html',
  styleUrls: ['./geocoding.component.scss']
})
export class GeocodingComponent {
  address: string;

  results$: Observable<google.maps.GeocoderResult[]>;
  errorMessage: string | null;

  constructor(private geocoder: GeocoderService) { }

  onSubmit(): void {
    this.errorMessage = null;
    this.results$ = this.geocoder.geocode({
      address: this.address
    }).pipe(
      catchError((status: google.maps.GeocoderStatus, results$) => {
        this.errorMessage = `Otrzymano następujący status: ${status}`;
        return results$;
      })
    );
  }
}
