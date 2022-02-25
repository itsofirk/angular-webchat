import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ChatHeaderComponent } from './conversation/chat-header/chat-header.component';
import { DalService } from './services/dal.service';
import { MessageInputComponent } from './conversation/message-input/message-input.component';
import { MatIconBtnComponent } from './mat-icon-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    ChatHeaderComponent,
    MessageInputComponent,
    MatIconBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
