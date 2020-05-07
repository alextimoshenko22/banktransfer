import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './appRouting.module';

import { BankLayoutComponent } from './bank-layot/bank-layout.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { BankHistoryComponent } from './bank-history/bank-history.component';

import { BankService } from './shared/bank.service';
import { LocalStorageService } from './shared/localstorage.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BankLayoutComponent,
    BankTransferComponent,
    BankHistoryComponent
  ],
  providers: [BankService, LocalStorageService],
  bootstrap: [AppComponent],
  exports: []
})

export class AppModule { }
