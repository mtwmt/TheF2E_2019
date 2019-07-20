import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  taskList: Array<any> = [
    {
      tit: 'Lorem ipsum dolor sit amet',
      level: '3'
    },
    // {
    //   tit: 'Consectetur adipiscing elit.',
    //   level: '2'
    // },
    // {
    //   tit: 'Nulla vulputate neque',
    //   level: '2'
    // },
    // {
    //   tit: 'Consequat lorem pharetra',
    //   level: '2'
    // },
    // {
    //   tit: 'Ultrices non vitae elit',
    //   level: '2'
    // },
  ];
  // doneList: Array(any) = [

  // ];


  constructor() { }

  getTask(tit: string, level?: string) {
    level = (!level) ? '0' : level;

    this.taskList.push({
      tit: tit,
      level: level
    });
  }
}
