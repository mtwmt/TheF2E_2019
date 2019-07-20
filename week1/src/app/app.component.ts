import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-main></app-main>
  <app-sidebar
    (doOpen)="getOpen($event)"
    [ngClass]="{'is-open': isOpen}"
  ></app-sidebar>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pomdoro';
  isOpen = false;

  ngOnInit() {

  }
  getOpen(data: any) {
    this.isOpen = data;
  }
}
