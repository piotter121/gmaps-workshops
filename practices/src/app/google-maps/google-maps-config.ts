import { InjectionToken } from '@angular/core';

export interface GoogleMapsConfig {
  apiKey: string;
  version?: string;
  libraries?: string[];
  channel?: string;
  language?: string;
  clientId?: string;
  region?: string;
}

export const GOOGLE_MAPS_CONFIG = new InjectionToken<GoogleMapsConfig>('Google Maps JS API config');
