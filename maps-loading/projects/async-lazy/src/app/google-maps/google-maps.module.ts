import { NgModule, ModuleWithProviders, InjectionToken, Optional, SkipSelf } from '@angular/core';
import { GoogleMapsLoaderService } from './google-maps-loader/google-maps-loader.service';
import { GoogleMapsConfig, GOOGLE_MAPS_CONFIG } from './google-maps-config';

@NgModule()
export class GoogleMapsModule {
  static forRoot(config: GoogleMapsConfig): ModuleWithProviders {
    return {
      ngModule: GoogleMapsModule,
      providers: [
        GoogleMapsLoaderService,
        { provide: GOOGLE_MAPS_CONFIG, useValue: config }
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: GoogleMapsModule) {
    if (parentModule) {
      throw new Error('GoogleMapsModule is already loaded. Import it in the AppModule only');
    }
  }
}
