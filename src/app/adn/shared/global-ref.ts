import { Injectable } from '@angular/core';

export interface MyGlobal {
  dataLayer: object[];
}

export abstract class GlobalRef {
  abstract get nativeGlobal(): MyGlobal;
}

@Injectable()
export class BrowserGlobalRef extends GlobalRef {
  window: any;

  constructor() {
    super();
    this.window = window;
  }

  get nativeGlobal(): MyGlobal {
    return this.window as MyGlobal;
  }
}
