import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MyPipe } from './mypipe';

import { FusionChartsModule } from "angular-fusioncharts";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';


// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as Widgets from "fusioncharts/fusioncharts.widgets";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FusionChartsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
