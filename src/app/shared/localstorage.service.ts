import { Injectable } from '@angular/core';
import { Transfer } from './transfer';

@Injectable()

export class LocalStorageService {
    //записать ключ и трансфер в LocalStorage
    public set(transfer: Transfer): void {
        const key = transfer.id;
        try {
            localStorage.setItem(key, JSON.stringify(transfer));
        }
        catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }
    //получить по ключу перевод из LocalStorage
    public get(key: string): Transfer {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }
    //получить все переводы из LocalStorage
    public getAll(): Transfer [] {
        let transfers: Transfer [] = [];
        for(let i = 0; i < localStorage.length; i ++) {
            transfers.unshift(this.get(localStorage.key(i)));
        }
        return transfers;
    }
    //удалить по ключу перевод из LocalStorage
    public del(key: string): void {
        try {
            localStorage.removeItem(key);
        }
        catch (e) {
            console.error('Error deleting data from localStorage', e);
        }
    }

}