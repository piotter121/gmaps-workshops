import { Injectable, Inject } from '@angular/core';
import { GoogleMapsConfig, GOOGLE_MAPS_CONFIG } from '../google-maps-config';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class GoogleMapsLoaderService {
  private scriptsLoaded$?: Promise<void>;

  constructor(
    @Inject(GOOGLE_MAPS_CONFIG) private mapsConfig: GoogleMapsConfig,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  load(): Promise<void> {
    if (!this.scriptsLoaded$) {
      this.scriptsLoaded$ = this.doLoad();
    }
    return this.scriptsLoaded$;
  }

  private doLoad(): Promise<void> {
    const globalContext: any = window as any;
    if (globalContext.google && globalContext.google.maps) {
      console.log('Google Maps JavaScript API has been already loaded');
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      const script: HTMLScriptElement = this.document.createElement('script');
      script.src = this.createScrForTag();
      script.async = true;
      script.defer = true;
      script.type = 'text/javascript';
      globalContext[this.mapsConfig.callback] = () => resolve();
      this.document.body.appendChild(script);
    });
  }

  private createScrForTag(): string {
    const { key, callback, libraries } = this.mapsConfig;
    let src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=${callback}`;
    if (libraries !== undefined) {
      src += `&libraries=${libraries.join(',')}`;
    }
    return src;
  }
}
