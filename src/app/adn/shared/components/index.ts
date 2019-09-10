import { AlertDialogComponent } from './dialogs/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { SessionTimeoutComponent } from './dialogs/session-timeout/session-timeout.component';
import { HeroToolbarComponent } from './layout/hero/hero-toolbar/hero-toolbar.component';
import { HeroComponent } from './layout/hero/hero.component';
import { LoaderComponent } from './loader/loader.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

export const components: any[] = [
  AlertDialogComponent,
  ConfirmDialogComponent,
  HeroComponent,
  HeroToolbarComponent,
  LoaderComponent,
  SessionTimeoutComponent,
  CheckboxComponent,
];

export * from './dialogs/alert-dialog/alert-dialog.component';
export * from './dialogs/confirm-dialog/confirm-dialog.component';
export * from './dialogs/session-timeout/session-timeout.component';
export * from './layout/hero/hero-toolbar/hero-toolbar.component';
export * from './layout/hero/hero.component';
export * from './loader/loader.component';
export * from './checkbox/checkbox.component';
