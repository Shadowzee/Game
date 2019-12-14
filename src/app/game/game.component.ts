import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


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

 
 ans=["thi",'sec']
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      question: ['']
      
    });
    this.question=this.getques();
   }
   getques(){
    return [
      { id: '1', name: 'ques 1',ques:"which",options:[{val:"one"},{val:"two"},{val:"three"},{val:"four"}],ans:"one" },
      { id: '2', name: 'ques 2',ques:"what" ,options:[{val:"one"},{val:"two"},{val:"three"},{val:"four"}],ans:"one" },
      { id: '3', name: 'ques 3' ,ques:"when",options:[{val:"one"},{val:"two"},{val:"three"},{val:"four"}],ans:"one" },
      { id: '4', name: 'ques 4' ,ques:"where",options:[{val:"one"},{val:"two"},{val:"three"},{val:"four"}],ans:"one" }
    ];
   }

  ngOnInit() {
  }
  
  
  sub(){
//     
console.log(this.form.value)
if(this.form.controls.question.value==this.question[this.count-1].ans){
  this.score++;
}


this.count++;
this.form.reset();
}


}
