import { Injectable } from '@angular/core';
import { NO_PROFILE_PICTURE } from 'src/environments/environment';
import { Recipient } from '../recipient';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  constructor() { }

  getPicture(convId: number) {
    //
    // Get Picture Logic
    //
    return NO_PROFILE_PICTURE;
  }

  getTitle(convId: number) {
    //
    // Get Conv Title Logic
    //
    return 'Random Chat';
  }

  getRecipient(convId: number): Recipient {
    // get recipient from db
    let name = this.getTitle(convId);
    let picture = this.getPicture(convId);
    return { name, picture };
  }
}
