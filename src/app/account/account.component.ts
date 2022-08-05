import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input()
  account: { name: string; status: string; } | undefined;

  @Input()
  id: number | undefined;

  @Output()
  statusChanged = new EventEmitter<{ accountId: number; newStatus: string; }>();

  constructor() { }

  ngOnInit(): void {
  }

  onSet(status: string) {
    this.statusChanged.emit({accountId: this.id, newStatus: status});
    console.log('For account name with id ' + this.id + ' a server status changed to: ' + status);
  }

}
