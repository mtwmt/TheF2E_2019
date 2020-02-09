import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AppStoreService } from '../app-store.service';

@Component({
  selector: 'app-masklist',
  templateUrl: './masklist.component.html',
  styleUrls: ['./masklist.component.scss']
})
export class MasklistComponent implements OnInit {

  constructor(
    public appService: AppService,
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {
  }
  setInfo( pos, info ){
    this.appStoreService.setPharmacyInfo( pos, info );
  }
}
