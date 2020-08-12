import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-watermarks',
  templateUrl: './watermarks.component.html',
  styleUrls: ['./watermarks.component.scss']
})
export class WatermarksComponent {

  pathToGithub = `${environment.githubWebsiteBase}`;
  pathToPortfolio = `${environment.portfolioWebsiteBase}`;

  constructor() { }

}
