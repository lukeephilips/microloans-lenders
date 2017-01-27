import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Lender } from '../lender.model';
import { LenderDetailComponent } from '../lender-detail/lender-detail.component';
import { LenderService } from '../lender.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lenders',
  templateUrl: './lenders.component.html',
  styleUrls: ['./lenders.component.css'],
  providers: [LenderService]
})
export class LendersComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  lenders: FirebaseListObservable<any>;
  filterByLenderValue: string = "All"
  currentRoute:string = this.router.url;


  constructor(private router: Router, private lenderService: LenderService) { }

  ngOnInit() {
    this.lenders = this.lenderService.getLenders();
    this.currentRoute = this.router.url
  }
  goToDetailPage(clickedLender: any){
    // console.log(clickedLender.$key)
    this.router.navigate(['lenders', clickedLender.$key])
  }
  filterByLenderType(type){
    this.filterByLenderValue = type;
  }
  selectLender(lender){
    this.clickSender.emit(lender);
  }
}
