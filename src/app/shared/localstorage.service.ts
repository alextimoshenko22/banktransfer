import { Injectable } from '@angular/core';
import { Transfer } from './transfer';

@Injectable()

export class LocalStorageService {

    public set(transfer: Transfer): void {
        try {
            localStorage.setItem(transfer.id, JSON.stringify(transfer));
        }
        catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }

    public get(key: string): Transfer {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }

    public getAll(): Transfer [] {
        let transfers: Transfer [] = [];
        for(let i = 0; i < localStorage.length; i ++) {
            transfers.push(this.get(localStorage.key(i)));
        }
        return transfers;
    }

    public delTransfer(key: string) {
        localStorage.removeItem(key);
    }
}