import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule //Needed so that app runs correctly within a browser.
  ],
  providers: [],
  bootstrap: [ AppComponent ] //Starting component for application start-up
})
export class AppModule { }
