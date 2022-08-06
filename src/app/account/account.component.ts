import {Component, Input, OnInit} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

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

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService,
  ) { }

  ngOnInit(): void {
  }

  onSet(status: string) {
    this.accountsService.getStatusUpdated(this.id, status);
  }

}
