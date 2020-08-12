import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.model';

@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.scss']
})
export class OnlineUsersComponent implements OnInit {

  // TODO: Get online users from service
  users = [];

  constructor() { }

  ngOnInit() { }

}
