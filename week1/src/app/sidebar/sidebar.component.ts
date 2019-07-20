import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SoundComponent } from './sound/sound.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  comps = new Map<string, any>(
    [
      ['task', TaskComponent],
      ['analysis', AnalysisComponent],
      ['sound', SoundComponent],
    ]
  );

  @Output() doOpen: EventEmitter<any> = new EventEmitter();

  currect = 'task';
  isOpen: boolean;

  constructor() { }


  ngOnInit() {
  }

  open(el: string) {

    if (this.currect === el && this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }

    this.currect = (!this.isOpen) ? '': el;
    this.doOpen.emit( this.isOpen );

  }

}
