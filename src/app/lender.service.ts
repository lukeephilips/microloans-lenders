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

}
