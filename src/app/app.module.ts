import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HsjlayoutComponent } from './hsjlayout/hsjlayout.component';
import { Hsjlayout1Component } from './hsjlayout1/hsjlayout1.component';
import { Hsjlayout2Component } from './hsjlayout2/hsjlayout2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HsjlayoutComponent,
    Hsjlayout1Component,
    Hsjlayout2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
