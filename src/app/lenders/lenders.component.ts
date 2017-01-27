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
  lenders: any;
  filterByLenderValue: string = "All"
  currentRoute:string = this.router.url;

  constructor(private router: Router, private lenderService: LenderService) { }

  ngOnInit() {
    this.lenderService.getLenders().subscribe(dataLastEmittedFromObserver => {
      this.lenders = dataLastEmittedFromObserver;
   });

    this.currentRoute = this.router.url
  }
  goToDetailPage(clickedLender: any){
    this.router.navigate(['lenders', clickedLender.$key])
  }
  filterByLenderType(type){
    this.filterByLenderValue = type;
  }
  selectLender(lender){
    this.clickSender.emit(lender,);
  }
  deleteLender(lender){
    if(confirm("For sure?")){
      this.lenderService.destroyLender(lender);
    }
  }
  calcProjectsFunded(lender){
    if (lender.portfolio){
        return lender.portfolio.length;
    } else {
    return 0
    }
  }
}
