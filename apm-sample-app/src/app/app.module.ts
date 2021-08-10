import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces-pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
     AppComponent
    ,ProductListComponent
    ,ConvertToSpacesPipe
    ,StarComponent
    ,WelcomeComponent
    ,ProductDetailComponent
    ,PageNotFoundComponent
  ],
  imports: [
     BrowserModule //Needed so that app runs correctly within a browser.
    ,FormsModule
    ,HttpClientModule
    ,RouterModule.forRoot([/*First Match Wins*/
       { path: 'products', component: ProductListComponent }
      ,{ path: 'products/:id'
        ,canActivate: [ ProductDetailGuard ]
        ,component: ProductDetailComponent 
       }
      ,{ path: 'welcome', component: WelcomeComponent }
      ,{ path: '', redirectTo: 'welcome', pathMatch: 'full' }
      ,{ path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ] //Starting component for application start-up
})
export class AppModule { }
