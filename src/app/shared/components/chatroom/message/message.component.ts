import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/shared/models/message.model';
import { Status } from '@app/shared/enums/status.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Input() previous: Message;
  @Input() next: Message;

  constructor() { }

  ngOnInit() { }

  get sent() {
    if (this.message) {
      return this.message.status === Status.Sent;
    }
  }

  get isSameStatusAsPrevious() {
    return this.previous ? this.previous.status === this.message.status : false;
  }

  get isSameStatusAsNext() {
    return this.next ? this.next.status === this.message.status : false;
  }
}
