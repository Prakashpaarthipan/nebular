import { ModuleWithProviders, NgModule } from '@angular/core';

import { NbSharedModule } from '../../shared/shared.module';
import { NbA11yModule } from '../a11y/a11y.module';
import { NbCdkMappingModule } from './mapping';
import { NbPositionBuilderService } from './overlay-position';
import { NbOverlayContainerComponent } from './overlay-container';
import { NbOverlayService } from './overlay';
import { NbCdkAdapterModule } from '../adapter/adapter.module';
import { NbPositionHelper } from './position-helper';


@NgModule({
  imports: [
    NbCdkMappingModule,
    NbSharedModule,
  ],
  declarations: [NbOverlayContainerComponent],
  exports: [
    NbCdkMappingModule,
    NbCdkAdapterModule,
    NbOverlayContainerComponent,
  ],
})
export class NbOverlayModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NbOverlayModule,
      providers: [
        NbPositionBuilderService,
        NbOverlayService,
        NbPositionHelper,
        ...NbCdkMappingModule.forRoot().providers,
        ...NbCdkAdapterModule.forRoot().providers,
        ...NbA11yModule.forRoot().providers,
      ],
    };
  }
}
