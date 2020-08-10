import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-watermark',
  templateUrl: './watermark.component.html',
  styleUrls: ['./watermark.component.scss']
})
export class WatermarkComponent {

  pathToGithub = `${environment.githubWebsiteBase}`;
  pathToPortfolio = `${environment.portfolioWebsiteBase}`;

  constructor() { }

}
