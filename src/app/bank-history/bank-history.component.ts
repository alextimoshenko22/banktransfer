import { Component, OnInit } from '@angular/core';

import { Transfer } from '../shared/transfer';

import { BankService } from '../shared/bank.service';

@Component({
  selector: 'bbank-history',
  templateUrl: 'bank-history.component.html',
  styleUrls: ['bank-history.component.css']
})

export class BankHistoryComponent implements OnInit {
  transfers: Transfer[];

  constructor(private bankService: BankService) {
  }

  ngOnInit() {
    this.transfers = this.bankService.getTransfers();
  }

  repeat(transfer: Transfer) {
    this.bankService.repeatTransfer(transfer);
  }

  delete(transfer: Transfer) {
    this.bankService.deleteTransfer(transfer);
  }

}