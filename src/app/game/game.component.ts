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
 ans=["thi",'sec']
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      question: ['']
      
    });
    this.question=this.getques();
   }
   getques(){
    return [
      { id: '1', name: 'Q 1',ques:"A farmer has 17 sheep and all but nine die. How many are left?",options:[{val:"Eight"},{val:"Seventeen"},{val:"Zero"},{val:"Nine"}],ans:"Nine" },
      { id: '2', name: 'Q 2',ques:"Who is bigger: Mr. Bigger, Mrs. Bigger, or their baby?" ,options:[{val:"Mr.Bigger"},{val:"Mrs. Bigger"},{val:"Baby"},{val:"You"}],ans:"Baby" },
      { id: '3', name: 'Q 3' ,ques:"What are the next three letters in the following sequence?J, F, M, A, M, J, J, A, __, __, __?",options:[{val:"S,O,N"},{val:"D,H,M"},{val:"M,Q,Q"},{val:"R,Z,A"}],ans:"S,O,N" },
      { id: '4', name: 'Q 4' ,ques:"Jimmy’s mother had four children. She named the first Monday. She named the second Tuesday, and she named the third Wednesday. What is the name of the fourth child?",options:[{val:"Thrushday"},{val:"Friday"},{val:"Janny"},{val:"Jimmy"}],ans:"Jimmy" },
      { id: '5', name: 'Q 5',ques:"Which travels faster?",options:[{val:"Hot"},{val:"Cold"},{val:"Feelings"},{val:"Ball"}],ans:"Hot" },
      { id: '6', name: 'Q 6',ques:"8 5 4 9 1 7 6 10 ,_,_? " ,options:[{val:"3,2"},{val:"11,1"},{val:"9,8"},{val:"3,8"}],ans:"3,2" },
      { id: '7', name: 'Q 7' ,ques:"What day would yesterday be if Thursday was four days before the day after tommorow?",options:[{val:"Monday"},{val:"Thrusday"},{val:"Friday"},{val:"Saturday"}],ans:"Friday" },
      { id: '8', name: 'Q 8' ,ques:"The following sentence is false. The preceding sentence is true. Are these sentences true or false?",options:[{val:"True"},{val:"False"},{val:"Neither"},{val:"Both"}],ans:"Neither" },
      { id: '9', name: 'Q 9',ques:"A queen bee was buzzing, a worker bee was buzzing, a honey bee was buzzing, and a killer bee was buzzing. How many bees were in buzzing?",options:[{val:"Four"},{val:"One"},{val:"Zero"},{val:"Two"}],ans:"One" },
      { id: '10', name: 'Q 10',ques:"A dog had three puppies, named Mopsy, Topsy and Spot. What was the mothers name." ,options:[{val:"Mrs. Mopsy"},{val:"Mopsy"},{val:"What"},{val:"Why"}],ans:"What" },
      
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
this.gaugeValue = this.score;
this.form.reset();
}


}
