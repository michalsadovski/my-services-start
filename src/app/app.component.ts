import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accounts = [
    {name: 'Master Account', status: 'Active'},
    {name: 'Test Account', status: 'Inactive'},
    {name: 'Hidden Account', status: 'Unknown'}
  ];

  onAccountAdded(newAccount: { name: string; status: string; }) {
    console.log(newAccount);
    this.accounts.push(newAccount);

  }

  getStatusChanged(updateAccount: { accountId: number; newStatus: string; }) {
    this.accounts[updateAccount.accountId]!.status = updateAccount.newStatus;
    console.log(updateAccount.accountId, updateAccount.newStatus);
  }
}
