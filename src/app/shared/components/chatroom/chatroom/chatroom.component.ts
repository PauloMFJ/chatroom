import {
  AfterViewChecked,
  Component,
  Input,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Message } from "@app/shared/models/message.model";
import { Status } from "@app/shared/enums/status.model";
import { fadeInOutAnimation } from "@app/shared/animations/fade-in-out.component";
import { ChatService } from "@app/shared/services/chat.service";
import { User } from "@app/shared/models/user.model";
import { UserService } from "@app/shared/services/user.service";

@Component({
  selector: "app-chatroom",
  templateUrl: "./chatroom.component.html",
  animations: [fadeInOutAnimation],
  styleUrls: ["./chatroom.component.scss"]
})
export class ChatroomComponent implements AfterViewChecked {
  messages = [];
  message: string;
  user: User;

  @ViewChild("container", { static: false }) container: ElementRef;

  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) {
    this.listenForMessages();
    this.listenToUserChangeEvents();
    this.user = new User();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  listenForMessages() {
    this.chatService.getMessage().subscribe((message: Message) => {
      if (message.user.id !== this.user.id) {
        message.status = Status.Recieved;
        this.messages.push(message);
      }
    });
  }

  listenToUserChangeEvents() {
    this.userService.getUser().subscribe(user => (this.user = user));
  }

  get hasMessage() {
    return this.message;
  }

  send() {
    if (this.hasMessage) {
      const message = new Message();
      message.user = this.user;
      message.message = this.message;
      message.status = Status.Sent;
      message.date = new Date();
      this.messages.push(message);
      this.chatService.sendMessage(message);
      this.message = "";
      this.scrollToBottom();
    }
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
