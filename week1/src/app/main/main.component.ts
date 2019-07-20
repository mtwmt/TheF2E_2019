import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  Arr = Array;
  time: string;
  updateTime: any;
  taskList: Array<any> = [];


  constructor( public appService: AppService ) { }



  ngOnInit() {
    this.getTime('Asia/Taipei');
    this.updateTime = setInterval(() => { this.getTime('Asia/Taipei'); }, 5000);


    this.taskList = this.appService.taskList;


  }
  getTime(area: string): void {
    // tslint:disable-next-line: one-variable-per-declaration
    const date = new Date(),
      time = date.toLocaleString('en-US', {
        timeZone: area,
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
      }),
      year = date.toLocaleString('en-US', { timeZone: area, year: 'numeric' }),
      month = date.toLocaleString('en-US', { timeZone: area, month: '2-digit' }),
      day = date.toLocaleString('en-US', { timeZone: area, day: 'numeric' }),
      week = date.toLocaleString('en-US', { timeZone: area, weekday: 'long' });

    this.time = `${year}.${month}.${day}　${week} ${time}`;
  }
}
