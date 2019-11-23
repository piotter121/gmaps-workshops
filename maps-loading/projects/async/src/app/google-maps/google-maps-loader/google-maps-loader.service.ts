import { Injectable, Inject } from '@angular/core';
import { GoogleMapsConfig, GOOGLE_MAPS_CONFIG } from '../google-maps-config';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class GoogleMapsLoaderService {
  private scriptsLoaded$?: Promise<void>;

  constructor(
    @Inject(GOOGLE_MAPS_CONFIG) private mapsConfig: GoogleMapsConfig,
    @Inject(DOCUMENT) private document: Document
  ) { }

  load(): Promise<void> {
    if (!this.scriptsLoaded$) {
      this.scriptsLoaded$ = this.doLoad();
    }
    return this.scriptsLoaded$;
  }

  private doLoad(): Promise<void> {
    const global: any = window as any;
    if (global.google && global.google.maps) {
      return Promise.resolve();
    }
    const { apiKey, callbackName } = this.mapsConfig;
    const script: HTMLScriptElement = this.document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    return new Promise((resolve) => {
      global[callbackName] = resolve;
      this.document.body.appendChild(script);
    });
  }
}
