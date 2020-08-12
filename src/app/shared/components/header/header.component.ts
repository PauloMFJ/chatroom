import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  readonly items = [
    { link: '/chatroom', title: 'Chatroom' },
//    { link: '/rooms', title: 'Rooms' },
  ];

  constructor() { }

}
