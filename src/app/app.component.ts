import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  buttonClicks = [];

  onButtonClicked() {
    this.showDetails = !this.showDetails;
    this.buttonClicks.push(new Date());
  }
}
