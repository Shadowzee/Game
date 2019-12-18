import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitshow;
  
  constructor(private config:ConfigService){}
  title = 'first';
  switch(){
   this.submitshow= this.config.gameswitchvalue();
  }
  name(event){
this.config.personname=event.target.value;
  }
}
