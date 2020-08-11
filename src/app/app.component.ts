import { Component } from '@angular/core';
import { fadeInOutAnimation } from '@app/shared/animations/fade-in-out.component';
import { User } from '@app/shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ fadeInOutAnimation ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;
}
