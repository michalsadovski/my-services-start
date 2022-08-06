import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logMessage(status: string) {
    console.log('A server status changed to: ' + status)
  }

}
