import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BankService } from '../shared/bank.service';
import { CreditCardValidator } from '../shared/validator';


@Component({
  selector: 'bank-transfer',
  templateUrl: 'bank-transfer.component.html',
  styleUrls: ['bank-transfer.component.css']
})
export class BankTransferComponent {
  num1: string;
  num2: string;
  month: number;
  year: number;
  sum: number;
  date: number = Date.now();

  arrayMonth: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  arrayYear: number [] = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  //creditCardTypes: string [] = ["Visa", "MasterCard"];

  constructor(private bankService: BankService) { }

  myForm: FormGroup = new FormGroup ({
    'cardNumber1': new FormControl('', [Validators.required, CreditCardValidator.validateCCNumber]),
    'fio': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'sum': new FormControl('', [Validators.required, CreditCardValidator.validateSum, Validators.min(1), Validators.max(999999)]),
    'month': new FormControl('', Validators.required),
    'year': new FormControl('', Validators.required),
    'cardNumber2': new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log("Transfer complete");
    this.bankService.createTransfer(this.num1, this.num2, this.month, this.year, this.sum, this.date);
  }
}