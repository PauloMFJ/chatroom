import { AfterViewChecked, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '@app/shared/models/message.model';
import { Status } from '@app/shared/enums/status.model';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {

  messages = [];
  message: string;

  @ViewChild('container', { static: false }) container: ElementRef;

  constructor() {}

  ngOnInit() {

  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  get hasMessage() {
    return this.message;
  }

  send() {
    if (this.hasMessage) {
      const message = new Message();
      message.message = this.message;
      message.status = Status.Sent;
      this.messages.push(message);
      this.message = '';
      this.scrollToBottom();
    }
  }

  sendTestRecieved() {
      const message = new Message();
      message.message = 'Okay!';
      this.messages.push(message);
      this.scrollToBottom();
  }

  getStatusForPrevious(index: number) {
    return index !== 0 ? this.messages[index - 1] : null;
  }

  getStatusForNext(index: number) {
    return index !== this.messages.length - 1 ? this.messages[index + 1] : null;
  }

  scrollToBottom(): void {
    if (this.container) {
      this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    }
  }

}
