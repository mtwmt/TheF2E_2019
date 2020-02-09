import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AppStoreService } from './app-store.service';
@Injectable({
  providedIn: 'root'
})
export class AppService {


  url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR05WGCvc-9Ebzk6FfkBra5PKPTEh9m8EudIpKp7HRJ-woZvl9BsGMrYiRs';

  constructor(
    private httpClient: HttpClient,
    private appStoreService: AppStoreService
  ) { }


  fetchTaiwanCity(city?: string) {
    return this.httpClient.get<any>('../assets/citycounty.json')
      .pipe(
        tap(res => {
          this.appStoreService.setCity(res);
        })
      )
  }

  fetchPharmacy(area?: string) {
    return this.httpClient.get<any>(this.url)
      .pipe(
        tap(res => {
          this.appStoreService.setPharmacy(res.features);
        })
      )
  }
}
