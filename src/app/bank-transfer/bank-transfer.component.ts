import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BankService } from '../shared/bank.service';
import { CreditCardValidator } from '../shared/validator';

@Component({
  selector: 'bank-transfer',
  templateUrl: 'bank-transfer.component.html',
  styleUrls: ['bank-transfer.component.css']
})

@Injectable()

export class BankTransferComponent implements OnInit {
  num1: string; //номер карты отправителя
  num2: string; //номер карты получателя
  fio: string; // ФИО отправителя
  month: number; //месяц карты
  year: number; //год карты
  sum: number; //сумма перевода
  date: number = Date.now(); //текущая дата (дата перевода)
  arrayMonth: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  arrayYear: number[] = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

  constructor(private bankService: BankService) { }

  //реактивные формы и валидация полей карт
  myForm: FormGroup = new FormGroup({
    'cardNumber1': new FormControl('', [Validators.required, CreditCardValidator.validateCCNumber]),
    'cardNumber2': new FormControl('', [Validators.required, CreditCardValidator.validateCCNumber]),
    'fio': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'month': new FormControl('', Validators.required),
    'year': new FormControl('', Validators.required),
    'sum': new FormControl('', [Validators.required, CreditCardValidator.validateSum, Validators.min(1), Validators.max(999999)])
  })

  ngOnInit() {
    const transfer = this.bankService.getData();
    if (transfer) {
      this.myForm.setValue({
        'cardNumber1': transfer.num1,
        'cardNumber2': transfer.num2,
        'fio': transfer.fio,
        'month': transfer.month,
        'year': transfer.year,
        'sum': transfer.sum
      });
    }
    this.bankService.transfer = null;
  }

  //создать перевод
  onSubmit() {
    this.num1 = this.myForm.controls["cardNumber1"].value;
    this.num2 = this.myForm.controls["cardNumber2"].value;
    this.fio = this.myForm.controls["fio"].value;
    this.month = this.myForm.controls["month"].value;
    this.year = this.myForm.controls["year"].value;
    this.sum = this.myForm.controls["sum"].value;

    this.bankService.createTransfer(this.num1, this.num2, this.fio, this.month, this.year, this.sum, this.date);
    console.log("Transfer complete");
    this.myForm.reset();
  }
}