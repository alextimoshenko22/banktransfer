import { Injectable } from '@angular/core';
import { Transfer } from './transfer';
import { LocalStorageService } from './localstorage.service';

@Injectable()

export class BankService {
    transfers: Transfer[];
    transfer: Transfer;

    constructor(private localStorage: LocalStorageService) {
        this.transfers = localStorage.getAll() || [];
    }

    getTransfers(): Transfer[] {
        return this.transfers;
    }

    createTransfer(num1: string, num2: string, month: number, year: number, sum: number, date: number) {
        let id = new Date().getTime().toString();
        let transfer = new Transfer(id, num1, num2, month, year, sum, date);
        this.localStorage.set(transfer);
        this.transfers.unshift(transfer);
    }

    repeatTransfer(transfer: Transfer) {
        //this.transfers.unshift(transfer);
        this.transfer = transfer;
    }

    getData(): Transfer{
        return this.transfer;
    }

    deleteTransfer(transfer: Transfer) {
        let index: number = this.transfers.indexOf(transfer);
        if (index > -1)
            this.transfers.splice(index, 1);
        localStorage.delTransfer(transfer.id);
    }
}