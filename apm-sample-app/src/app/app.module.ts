import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces-pipe';
import { StarComponent } from './shared/star/star.component';

@NgModule({
  declarations: [
     AppComponent
    ,ProductListComponent
    ,ConvertToSpacesPipe
    ,StarComponent
  ],
  imports: [
     BrowserModule //Needed so that app runs correctly within a browser.
    ,FormsModule 
  ],
  providers: [],
  bootstrap: [ AppComponent ] //Starting component for application start-up
})
export class AppModule { }
