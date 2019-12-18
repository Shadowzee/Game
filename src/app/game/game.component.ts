import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
count=1;
score=0;
questions;
question=[];
form:FormGroup;
url="http://localhost:3000/questions";
submiturl="http://localhost:3000/submissions";
gaugeType = "semi";
gaugeValue = this.score;
max=10;
min=0;
thresholds={
  '5':{
    color:'green'
  },
  '3':{
    color:'orange'
  },
  '0':{
    color:'red'
  }
 
}
gaugeLabel = "Score";
gaugeAppendText = "/ 10";
 ques;

  constructor(private fb: FormBuilder,private config:ConfigService) {
    this.form = this.fb.group({
      question: ['']
      
    });
    config.getquestions(this.url).subscribe(res=>{
      this.ques=res;
      
      this.question=this.ques;
    });
   
   }
   

  ngOnInit() {
  }
  
  
  sub(){
//     
console.log(this.form.value)
if(this.form.controls.question.value==this.question[this.count-1].ans){
  this.score++;
}
if(this.count==10){
this.submitscore();
}
this.count++;
this.gaugeValue = this.score;
this.form.reset();
}
submitscore(){
  this.config.score=this.score;
  this.config.createscore(this.submiturl).subscribe(res=>{
    console.log(res);
  })
}

}
