import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import { Lender } from '../lender.model';
import { LenderService } from '../lender.service';

@Component({
  selector: 'app-lender-detail',
  templateUrl: './lender-detail.component.html',
  styleUrls: ['./lender-detail.component.css'],
  providers: [LenderService]

})
export class LenderDetailComponent implements OnInit {
  lenderKey: any;
  lenderToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private lenderService: LenderService, private router: Router) { }

  ngOnInit() {
      this.route.params.forEach((urlParameters) =>{
        this.lenderKey = urlParameters['key']
        this.lenderToDisplay = this.lenderService.getLenderByKey(this.lenderKey);
      });
    }
}
