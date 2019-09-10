import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'adn-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class JobStatusComponent implements OnInit {
  jobStatusInfoForm: FormGroup;
  panelOpenState = false;
  constructor(private _fb: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.jobStatusInfoForm = this._fb.group({
      accountNumber: ['', Validators.required],
      jobStatus: ['', Validators.required],
      accountName: ['', Validators.required],
    });
  }
}
