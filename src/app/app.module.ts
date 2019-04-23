import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeComponentComponent } from './Components/bike-component/bike-component.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewRegistrationComponent } from './Components/view-registration/view-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeComponentComponent,
    HomeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
