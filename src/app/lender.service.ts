import { Injectable } from '@angular/core';
import { Lender } from './lender.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class LenderService {
  lenders: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.lenders = angularFire.database.list('lenders');
  }
  getLenders(){
    console.log(this.lenders)
    return this.lenders;
  }
  getLenderByKey(lenderKey: string){
    return this.angularFire.database.object('lenders/' + lenderKey);
  }
  createLender(lender: Lender){
    this.lenders.push(lender);
  }

}
