import { Component, Input, OnInit } from '@angular/core';
import { Recipient } from '../recipient';
import { DalService } from '../services/dal.service';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  convId = 0;
  recipient: Recipient;
  _service: DalService;

  constructor(service: DalService) { 
    this._service = service;
    this.recipient = this._service.getRecipient(this.convId)
    console.log(this.recipient);
    
  }

  ngOnInit(): void {
  }

  @Input()
  set conversationId(convId:number){
    this.convId = convId;
  }

}
