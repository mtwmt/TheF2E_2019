import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Subject, Observable, timer } from 'rxjs';
import { take, map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  temp = new Subject();

  Arr = Array;
  time: string;
  updateTime: any;
  // countDown: any = 10;
  countDown: any;
  taskList: Array<any> = [];

  buttonMsg = 'Start';

  count = {
    'min': 10,
    'sec': 60
  };


  constructor(public appService: AppService) {}



  ngOnInit() {
    this.getTime('Asia/Taipei');
    this.updateTime = setInterval(() => { this.getTime('Asia/Taipei'); }, 5000);
    this.taskList = this.appService.taskList;

    // this.countDown = timer(0, 1000).pipe(
    //   take(this.count.sec),
    //   map( () => --this.count.sec )
    //   // takeWhile(i => i >= 0)
    // );

    // this.temp.subscribe( e => {
    //   console.log( 'qwe',e )

    //   if( e == 0 ){
    //     this.doCountdown();
    //     --this.count.min
    //     console.log( this.count )
    //   }
    //   console.log( 'this.countDown',this.countDown )
    // });


  }

  // doCountdown(){

  // }
  doCountdown() {
    let t;

    if (this.count.sec === 0) {
      clearTimeout(t);

      console.log('end')
    } else {
      t = setTimeout(() => {
        this.count.sec -= 1;
        this.doCountdown();

        console.log('sad', this.count.sec);
      }, 1000);
    }
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
