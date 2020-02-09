import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  getCity: any;
  getCity$: BehaviorSubject<any> = new BehaviorSubject(this.getCity);

  getArea: any;
  getArea$: BehaviorSubject<any> = new BehaviorSubject(this.getArea);

  getAllPharmacy: Array<any>;

  getPharmacy$: Subject<any> = new Subject();

  getCurInfo$: Subject<any> = new Subject();

  constructor() { }

  setCity(ary: Array<any>) {
    this.getCity = ary;
    this.getCity$.next(this.getCity);
  }
  setArea(city: string) {
    this.getArea = this.getCity.filter(e => e.CityName === city);
    this.getArea$.next(this.getArea[0].AreaList);
  }

  setPharmacy(ary: Array<any>) {
    this.getAllPharmacy = ary;
  }
  setPharmacyList(city: string, area?: string) {
    const newList = this.getAllPharmacy.filter(e => {
      if (e.properties.address.match('台')) {
        e.properties.address = e.properties.address.replace('台', '臺')
      }
      if (!area) {
        area = '';
      }
      return e.properties.address.match(city + area);
    });
    this.getPharmacy$.next(newList);
  }
  setPharmacyInfo(pos, info) {
    const newInfo = { ...info, coordinates: [pos.coordinates[1], pos.coordinates[0]] };
    this.getCurInfo$.next(newInfo);
  }

}
