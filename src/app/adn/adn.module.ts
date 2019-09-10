import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdnComponent } from './adn.component';
import { SharedModule } from './shared/shared.module';
import { JobStatusComponent } from './job-status/job-status.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AdnComponent,
    JobStatusComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ],
  entryComponents: [
    AdnComponent
  ],
  exports: [AdnComponent],
})
export class AdnModule { }
