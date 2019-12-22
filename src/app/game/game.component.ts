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
url="http://my-json-server.typicode.com/Shadowzee/questions/questions";
submiturl="http://my-json-server.typicode.com/Shadowzee/questions/questions";
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

  data = {
  chart: {
    caption: "Score",
    lowerlimit: "0",
    upperlimit: "10",
    showvalue: "1",
    numbersuffix: "",
    theme: "fusion",
    showtooltip: "0",
    transposeAnimation:"1"
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "3",
        code: "#F2726F"
      },
      {
        minvalue: "3",
        maxvalue: "5",
        code: "#FFC533"
      },
      {
        minvalue: "5",
        maxvalue: "10",
        code: "#62B58F"
      }
    ]
  },
  dials: {
    dial: [
      {
        value: this.score
      }
    ]
  }
};

 width = 260;
 height = 240;
 type = "angulargauge";
 dataFormat = "json";
 dataSource = this.data;

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
if(this.form.controls.question.value==null ||this.form.controls.question.value=="" ){
  return;
}
else{
if(this.form.controls.question.value==this.question[this.count-1].ans){
  this.score++;
  this.data.dials.dial[0].value=this.score;
}
if(this.count==10){
this.submitscore();
}
this.count++;
this.gaugeValue = this.score;
this.form.reset();
  }
}
submitscore(){
  this.config.score=this.score;
  this.config.createscore(this.submiturl).subscribe(res=>{
    console.log(res);
  })
}

}
