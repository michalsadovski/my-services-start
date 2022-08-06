import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {name: 'Master Account', status: 'Active'},
    {name: 'Test Account', status: 'Inactive'},
    {name: 'Hidden Account', status: 'Unknown'}
  ];

  constructor(private loggingService: LoggingService

  ) { }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logMessage(status);
  }

  getStatusUpdated(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logMessage(status);
  }

}
