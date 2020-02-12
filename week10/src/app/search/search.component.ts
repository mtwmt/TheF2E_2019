import { Component, OnInit } from '@angular/core';
import { AppStoreService } from '../app-store.service';
import { AppService } from '../app.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  assetsUrl = environment.assetsUrl;

  getTaiwanCity: Array<any>;
  getTaiwanCityArea: Array<any>;

  city: string;
  area: string;

  mask = '';

  childTotal: number;
  adultTotal: number;

  constructor(
    private appService: AppService,
    public appStoreService: AppStoreService
  ) { }

  ngOnInit() {


    combineLatest(
      this.appService.fetchTaiwanCity(),
      this.appService.fetchPharmacy(),
    ).pipe(
      map(res => {
        return [res[0], res[1]];
      })
    ).subscribe(res => {
      // console.log(123, res)
      // console.log('alllist', res[1] )
      this.getTaiwanCity = res[0];
      this.onCityChange('台北市');
      // this.appStoreService.getPharmacy$.next( res[1] );
    });

    this.appStoreService.getCalMask$.subscribe(res => {
      this.childTotal = res.childTotal;
      this.adultTotal = res.adultTotal;
    })
  }

  onCityChange(event: string) {
    this.appStoreService.setArea(event);
    this.city = event;
    this.appStoreService.setPharmacyList(this.city);
  }
  onAreaChange(event?: string) {

    if (event === '全區') {
      this.area = '';
    } else {
      this.area = event;
    }
    this.appStoreService.setPharmacyList(this.city, this.area);
  }
  onMask(str: string) {
    this.mask = str;
    this.appStoreService.setMask(str);
  }
}
