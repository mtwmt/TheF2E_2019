import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpen: boolean;

  onSwitch() {

    if (!this.isOpen) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }

  }
}
