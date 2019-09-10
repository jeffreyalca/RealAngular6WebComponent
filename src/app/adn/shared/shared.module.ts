import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserGlobalRef } from './global-ref';
import { IconsHelper } from './icons.helper';
import * as fromComponents from './components';
import * as fromDirectives from './directives';
import * as fromAngularMaterial from './material.config';
import * as fromPipes from './pipes';

@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    ...fromAngularMaterial.modules,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  exports: [
    CommonModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    ...fromAngularMaterial.modules,
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  providers: [...fromAngularMaterial.providers, IconsHelper, BrowserGlobalRef],
  entryComponents: [
    fromComponents.AlertDialogComponent,
    fromComponents.ConfirmDialogComponent,
    fromComponents.SessionTimeoutComponent,
  ],
})
export class SharedModule {
  constructor(private iconsHelper: IconsHelper) {
    this.iconsHelper.installIcons();
  }
}
