import { Injectable } from '@angular/core';
import { Transfer } from './transfer';
import { LocalStorageService } from './localstorage.service';

@Injectable()

export class BankService {
    transfers: Transfer[];
    transfer: Transfer;

    constructor(private localStorage: LocalStorageService) {
        //инициализировать массив переводов из LocalStorage
        this.transfers = localStorage.getAll() || [];
    }
    
    //получить все переводы
    getAllTransfers(): Transfer[] {
        return this.transfers;
    }

    //создать перевод: добавить в массив переводов данный перевод и записать его в LocalStorage
    createTransfer(num1: string, num2: string, fio: string, month: number, year: number, sum: number, date: number) {
        const id = new Date().getTime().toString();
        let transfer = new Transfer(id, num1, num2, fio, month, year, sum, date);
        this.localStorage.set(transfer);
        this.transfers.unshift(transfer);
    }

    //повтор перевода
    repeatTransfer(transfer: Transfer) {
        this.transfer = transfer;  
    }

    getData(): Transfer {
        return this.transfer;
    }

    //удалить перевод из массива переводов и LocalStorage
    deleteTransfer(transfer: Transfer) {
        let index: number = this.transfers.indexOf(transfer);
        if (index > -1)
            this.transfers.splice(index, 1);
        this.localStorage.del(transfer.id);
    }
}