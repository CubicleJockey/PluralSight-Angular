import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
     AppComponent
    ,WelcomeComponent
    ,PageNotFoundComponent
  ],
  imports: [
     BrowserModule //Needed so that app runs correctly within a browser.
    ,HttpClientModule
    ,RouterModule.forRoot([/*First Match Wins*/
       { path: 'welcome', component: WelcomeComponent }
      ,{ path: '', redirectTo: 'welcome', pathMatch: 'full' }
      ,{ path: '**', component: PageNotFoundComponent }
    ])
    ,ProductModule
  ],
  /*providers: [ ProductService ], OLD way use @Inject*/
  bootstrap: [ AppComponent ] //Starting component for application start-up
})
export class AppModule { }
