import { NgModule, ModuleWithProviders, InjectionToken, Optional, SkipSelf } from '@angular/core';
import { GoogleMapsConfig, GOOGLE_MAPS_CONFIG } from './google-maps-config';
import { Loader as GoogleMapsLoader } from '@googlemaps/loader';
import { GeocoderService } from './geocoder.service';

export function LoaderFactory(config: GoogleMapsConfig): GoogleMapsLoader {
  return new GoogleMapsLoader(config);
}

@NgModule()
export class GoogleMapsModule {
  static forRoot(config: GoogleMapsConfig): ModuleWithProviders<GoogleMapsModule> {
    return {
      ngModule: GoogleMapsModule,
      providers: [
        {
          provide: GOOGLE_MAPS_CONFIG,
          useValue: config
        },
        {
          provide: GoogleMapsLoader,
          useFactory: LoaderFactory,
          deps: [GOOGLE_MAPS_CONFIG]
        },
        GeocoderService
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: GoogleMapsModule) {
    if (parentModule) {
      throw new Error('GoogleMapsModule is already loaded. Import it in the AppModule only');
    }
  }
}
