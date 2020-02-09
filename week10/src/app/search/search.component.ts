import { Component, OnInit } from '@angular/core';
import { AppStoreService } from '../app-store.service';
import { AppService } from '../app.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  getTaiwanCity: Array<any>;
  getTaiwanCityArea: Array<any>;

  city: string;
  area: string;
  constructor(
    private appService: AppService,
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {


    combineLatest(
      this.appService.fetchTaiwanCity(),
      this.appService.fetchPharmacy()
    ).pipe(
      map(res => {
        return [res[0], res[1].features];
      })
    ).subscribe(res => {
      this.getTaiwanCity = res[0];
      this.onCityChange('臺北市');
    })
  }

  onCityChange(event) {
    this.appStoreService.setArea(event);
    this.city = event;

    this.appStoreService.setPharmacyList(this.city);
  }
  onAreaChange(event) {
    this.area = event;
    this.appStoreService.setPharmacyList(this.city, this.area);
  }
}
