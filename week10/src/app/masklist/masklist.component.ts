import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AppStoreService } from '../app-store.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-masklist',
  templateUrl: './masklist.component.html',
  styleUrls: ['./masklist.component.scss']
})
export class MasklistComponent implements OnInit {

  assetsUrl = environment.assetsUrl;

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
