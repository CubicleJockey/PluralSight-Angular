import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces-pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './products/product.service';

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
    ,HttpClientModule
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ] //Starting component for application start-up
})
export class AppModule { }
