import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'adn-session-timeout',
  templateUrl: './session-timeout.component.html',
  styleUrls: ['./session-timeout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionTimeoutComponent {
  public timer$: Observable<string>;
  private _sessionHasEnded: boolean;

  constructor(
    private dialogRef: MatDialogRef<SessionTimeoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
  ) {
    this.updateTimer();
  }

  get sessionHasEnded(): boolean {
    return this._sessionHasEnded;
  }

  private updateTimer(): void {
    // this.timer$ = this.authService.sessionTimer.pipe(
    //   map(timer => {
    //     this._sessionHasEnded =
    //       !timer.hours && !timer.minutes && !Math.floor(timer.seconds);
    //     return `${timer.minutes}m${Math.floor(timer.seconds)}s`;
    //   }),
    // );
  }

  keepSessionAlive(): void {
    // this.authService.authClient.session.refresh().then(session => {
    //   this.authService.createSessionTimer(session.expiresAt);
    //   this.updateTimer();
    //   this.dialogRef.close(true);
    // });
  }

  logout(): void {
    this.dialogRef.close(false);
    this.router.navigateByUrl('/auth/logout');
  }
}
