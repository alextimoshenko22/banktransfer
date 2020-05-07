import { Component, OnInit } from '@angular/core';
import { Transfer } from '../shared/transfer';
import { BankService } from '../shared/bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bbank-history',
  templateUrl: 'bank-history.component.html',
  styleUrls: ['bank-history.component.css']
})

export class BankHistoryComponent implements OnInit {
  transfers: Transfer[];

  constructor(private bankService: BankService, private router: Router) { }
  //инициализация таблицы с историей переводов
  ngOnInit() {
    this.transfers = this.bankService.getAllTransfers();
  }
  //повторить перевод: отправить данные в форму с переводом
  repeat(transfer: Transfer) {
    this.bankService.repeatTransfer(transfer);
    this.router.navigate(['/home/transfer']);
  }
  //удалить трансфер из таблицы с историей переводов и из LocalStorage
  delete(transfer: Transfer) {
    this.bankService.deleteTransfer(transfer);
  }

}