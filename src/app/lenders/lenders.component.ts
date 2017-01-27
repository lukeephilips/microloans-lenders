import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Lender } from '../lender.model';
import { LenderService } from '../lender.service'
// import { Router } from

@Component({
  selector: 'app-users',
  templateUrl: './lenders.component.html',
  styleUrls: ['./lenders.component.css'],
  providers: [LenderService]
})
export class LendersComponent implements OnInit {
  lenders: FirebaseListObservable<any>;
  constructor(private lenderService: LenderService) { }

  ngOnInit() {
    this.lenders = this.lenderService.getLenders();
    console.log(this.lenders);
  }
}
