import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  gameSwitch=false;

  constructor(private http:HttpClient) { }
  getquestions(questionurl):Observable<any>{
    return this.http.get<any>(questionurl);
  }
  gameswitchvalue(){
    this.gameSwitch=true;
    return true;
  }
  createscore(posturl,input):Observable<any>{
    return this.http.post<any>(posturl,input);
  }
}
