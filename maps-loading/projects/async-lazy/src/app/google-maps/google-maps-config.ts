import { InjectionToken } from '@angular/core';

export interface GoogleMapsConfig {
  callback: string;
  key: string;
  libraries?: string[];
}

export const GOOGLE_MAPS_CONFIG = new InjectionToken<GoogleMapsConfig>('Google Maps JS API config');
