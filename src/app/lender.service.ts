import { Injectable } from '@angular/core';
import { Lender } from './lender.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class LenderService {
  lenders: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.lenders = angularFire.database.list('lenders');
  }
  getLenders(){
    return this.lenders;
  }
  getLenderByKey(lenderKey: string){
    return this.angularFire.database.object('lenders/' + lenderKey);
  }
  createLender(lender: Lender){
    this.lenders.push(lender);
  }
  saveEdits(localLender: any){
    let fbaseLender = this.getLenderByKey(localLender.$key);
    fbaseLender.update(
      {name: localLender.name,
      image: localLender.image,
      type: localLender.type,
      accountBalance: localLender.accountBalance})
  }
  destroyLender(localLender: any){
    this.getLenderByKey(localLender.$key).remove();
  }
}
