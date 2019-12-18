import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxGaugeModule } from 'ngx-gauge';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MyPipe } from './mypipe';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxGaugeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
