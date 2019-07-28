import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskList: Array<any> = [];

  constructor(public appService: AppService) { }


  ngOnInit() {
    this.taskList = this.appService.taskList;
  }
  onKey( e: any) {
    this.appService.getTask( e.target.value );
    e.target.value = '';
  }
}
