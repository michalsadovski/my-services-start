import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output()
  accountToAdd = new EventEmitter<{ name: string; status: string; }>();

  constructor() { }

  ngOnInit(): void {
  }

  addAccount(accountName: string, statusName: string) {
    this.accountToAdd.emit({name: accountName, status: statusName});
    // this.accounts.push({name: accountName.value, status: statusName.value});
  }

}
