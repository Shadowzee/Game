import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxGaugeModule } from 'ngx-gauge';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { MyPipe } from './mypipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
