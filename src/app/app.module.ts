import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app.routing";
import { HomeComponent } from "app/home/home.component";
import { Page2Component } from "app/page2/page2.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
