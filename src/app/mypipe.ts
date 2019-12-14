import { Component ,Pipe} from '@angular/core';
@Pipe({
  name: 'myPipe'
})
export class MyPipe {
  transform(val: any[]) {
      return val.filter(x => x > 1);
  }
}