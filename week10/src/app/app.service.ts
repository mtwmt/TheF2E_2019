import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AppStoreService } from './app-store.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  assetsUrl = environment.assetsUrl;

  url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';

  constructor(
    private httpClient: HttpClient,
    private appStoreService: AppStoreService
  ) { }


  fetchTaiwanCity(city?: string) {
    return this.httpClient.get<any>(`${this.assetsUrl}/counties.json`)
      .pipe(
        map(res => {
          res.sort((a, b) => a.Sort - b.Sort);
          res.map((e: any) => {
            e.Districts.sort((a, b) => a.Sort - b.Sort);
          });
          return res;
        }),
        tap(res => {
          this.appStoreService.setCity(res);
        })
      )
  }

  fetchPharmacy(area?: string) {
    return this.httpClient.get<any>(this.url)
      .pipe(
        map(res => {
          res.features.map(e => {
            e.geometry.coordinates = e.geometry.coordinates.reverse();
            e.properties.phone = e.properties.phone.replace(/\s*/g, '');
          })
          return res.features.filter(e => e.properties.mask_adult > 0 || e.properties.mask_child > 0);
        }),
        tap(res => {
          this.appStoreService.setPharmacy(res);
        })
      )
  }
  fetchlocal() {
    const token = 'pk.eyJ1IjoibXR3bXQiLCJhIjoiY2s2Z2lvN2p5MmE2MjNsbjNsc2tvM2I5ciJ9.6WxKL8KMqhcRpsHrNNtvfQ';
    const key = 'AIzaSyBGd0MP4HMs0p6dQ_xV6gt-5XBkZc4jmD8';
    // const location = [-73.989, 40.733];
    const location = [24.953750499999998, 121.34356229999999];

    // return this.httpClient.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.join(',')}&key=${key}`)


    return this.httpClient.get<any>(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location.join(',')}.json?routing=true&access_token=${token}`
    )
  }

}
