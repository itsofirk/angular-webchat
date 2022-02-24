import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {
  picture = '';
  convTitle = '';

  constructor(){
  }

  ngOnInit(): void {
  }

  @Input()
  set conversationTitle(title: string) {
    this.convTitle = title;
  }

  @Input()
  set conversationPicture(imgSrc: string) {
    this.picture = imgSrc;
  }

  
}
