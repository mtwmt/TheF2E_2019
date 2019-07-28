import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  taskList: Array<any> = [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit.',
    'Nulla vulputate neque',
  ];

  doing: number;

  constructor() { }

  getTask( task:string ) {
    // level = (!level) ? '0' : level;
    this.taskList.push(task);
  }
}
