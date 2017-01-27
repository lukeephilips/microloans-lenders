import { Pipe, PipeTransform } from '@angular/core';
import { Lender } from './lender.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'lenderType',
  pure: false
})
export class LenderTypePipe implements PipeTransform {

  transform(input: Lender[], lenderType): any {
    var output: any[] =[];
    let types: string[] = ["Individual, Corporate"];
    if(input){
      if (lenderType === "Individual"){
        for (let i = 0; i < input.length; i++){
          if (input[i].type === "Individual") {
            output.push(input[i]);
          }
        }
        return (output);
      } else if (lenderType === "Corporate"){
        for (let i = 0; i < input.length; i++){
          if (input[i].type === "Corporate") {
            output.push(input[i]);
          }
        }
        return (output);
      } else {
        return input;
      }
    }
  }
}
