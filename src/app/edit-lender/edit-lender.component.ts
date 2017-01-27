import { Component, OnInit, Input } from '@angular/core';
import { Lender } from '../lender.model';
import { LenderService } from '../lender.service'

@Component({
  selector: 'app-edit-lender',
  templateUrl: './edit-lender.component.html',
  styleUrls: ['./edit-lender.component.css'],
  providers: [LenderService]

})
export class EditLenderComponent implements OnInit {
  @Input() lenderToEdit: Lender;
  constructor(private lenderService: LenderService) { }

  ngOnInit() {
  }
  doneEditing(lenderInQuestion: Lender){
    this.lenderService.saveEdits(lenderInQuestion);
    this.lenderToEdit = null;
  }

}
