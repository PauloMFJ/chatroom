import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Message } from '@app/shared/models/message.model';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

  private apiRoot = `${environment.serverApi}chathub/`;
  private hubConnection: HubConnection;

  private messageSubject = new Subject<Message>();
  private messageSubject$ = this.messageSubject.asObservable();

  private connectionEstablishedSubject = new Subject<boolean>();
  private connectionEstablishedSubject$ = this.connectionEstablishedSubject.asObservable();

  constructor() {
    this.createConnection();
    this.startConnection();
    this.listenToConnection();
  }

  private createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.apiRoot)
      .build();
  }

  private startConnection() {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection established!');
        this.connectionEstablishedSubject.next(true);
      })
      .catch((error) => {
        console.log('Error while establishing connection, retrying...');
        setTimeout(() => this.startConnection(), 5000);
      });
  }

  private listenToConnection() {
    this.hubConnection.on('NewMessage', (message) => this.messageSubject.next(message));
  }

  sendMessage(message: Message) {
    this.hubConnection.invoke('SendMessage', message);
  }

  getMessage(): Observable<Message> {
    return this.messageSubject$;
  }

  getConnectionEsablished(): Observable<boolean> {
    return this.connectionEstablishedSubject$;
  }
}
