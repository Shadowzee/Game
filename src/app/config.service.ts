import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  gameSwitch=false;
  personname;
  score;

  constructor(private http:HttpClient) { }
  getquestions(questionurl):Observable<any>{
    return this.http.get<any>(questionurl);
  }
  gameswitchvalue(){
    this.gameSwitch=true;
    return true;
  }
  createscore(posturl):Observable<any>{
    return this.http.post<any>(posturl,{[this.personname]:this.score});
  }
}
