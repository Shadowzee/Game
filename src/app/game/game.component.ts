import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
count=1;
score=0;

questions = this.fb.group({
    first: [''],
    sec:['']
    
  });
  items=[1,2];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  sub(event){
    this.questions.patchValue({
first:event.target.value
    });

if(this.questions.value.first=="thi"){
  this.score++;
}
this.count++;
  }
  sub2(event){
    this.questions.patchValue({
sec:event.target.value
    });
    if(this.questions.value.sec=="sec"){
      this.score++;
    }
this.count++;
  }

}
