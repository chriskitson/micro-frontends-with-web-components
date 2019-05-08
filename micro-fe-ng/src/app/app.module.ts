import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { CustomelementComponent } from './customelement/customelement.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomelementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent,
    CustomelementComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {

    const { injector } = this;

    // create custom elements from angular components
    const ngCustomElement = createCustomElement(CustomelementComponent, { injector });

    // define in browser registry
    customElements.define('ng-el', ngCustomElement);

  }
}
