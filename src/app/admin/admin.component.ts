import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Lender } from '../lender.model';
import { LenderService } from '../lender.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [LenderService]
})
export class AdminComponent implements OnInit {
  lenders: FirebaseListObservable<any>;
  lenderToEdit: Lender = null;

  constructor(private lenderService: LenderService) { }

  ngOnInit() {
  }
  selectLenderToEdit(lender){
    this.lenderToEdit = lender;
  }
}
