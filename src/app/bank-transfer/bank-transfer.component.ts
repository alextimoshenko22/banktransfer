import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bank-transfer',
  templateUrl: 'bank-transfer.component.html',
  styleUrls: ['bank-transfer.component.css']
})
export class BankTransferComponent {

  constructor() {
    localStorage.setItem("val1", JSON.stringify({id:"1", val:"transfer"}));
    console.log(JSON.parse(localStorage.getItem("val1")));
  }

  public p2pForm = new FormGroup({
    'cardNumber': new FormControl('', Validators.required)
  })
}