import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitshow;
  personname;
  constructor(private config:ConfigService){}
  title = 'first';
  switch(){
   this.submitshow= this.config.gameswitchvalue();
  }
  name(event){
this.personname=event.target.value;
  }
}
