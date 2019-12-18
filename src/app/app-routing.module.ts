import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';

import {AuthGuard} from './auth.guard'
const routes: Routes = [
  { path: 'game', component: GameComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule ]
})
export class AppRoutingModule { }
