import { Component } from '@angular/core';
import { fadeInOutAnimation } from '@app/shared/animations/fade-in-out.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ fadeInOutAnimation ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Paulo';
}
