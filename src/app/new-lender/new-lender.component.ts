import { Component, OnInit } from '@angular/core';
import { Lender } from '../lender.model';
import { LenderService } from '../lender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-lender',
  templateUrl: './new-lender.component.html',
  styleUrls: ['./new-lender.component.css'],
  providers: [LenderService]
})
export class NewLenderComponent implements OnInit {

  constructor(private lenderService: LenderService, private router: Router) { }

  ngOnInit() {
  }
  submitForm(name: string, type:string, image:string, balance: string){
    var startingPortfolio: Object[] = [{"99":99}]
    let newLender: Lender = new Lender(name, type, image, parseInt(balance));
    this.lenderService.createLender(newLender);
    this.router.navigate(['lender-admin'])
  }

}
