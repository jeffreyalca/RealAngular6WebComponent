import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import {AdnModule} from "./adn/adn.module";

@NgModule({
   entryComponents: [
      AppComponent
   ],
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AdnModule,
   ],
   providers: []
})
export class AppModule {
   constructor(private injector: Injector) {
      const firstComponent = createCustomElement(AppComponent, { injector });
      customElements.define('app-first-component', firstComponent);
   }

   ngDoBootstrap() {}
}





