import { InjectionToken } from '@angular/core';

export interface GoogleMapsConfig {
  callbackName: string;
  apiKey: string;
}

export const GOOGLE_MAPS_CONFIG = new InjectionToken<GoogleMapsConfig>('Google Maps JS API config');
