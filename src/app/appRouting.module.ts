import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankLayoutComponent } from './bank-layot/bank-layout.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { BankHistoryComponent } from './bank-history/bank-history.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
      path: 'home',
      component: BankLayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'transfer',
          pathMatch: 'full'
        },
        {
          path: 'transfer',
          component: BankTransferComponent
        },
        {
          path: 'history',
          component: BankHistoryComponent
        }
      ]
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  
  export class AppRoutingModule { }