import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { AppStoreService } from '../app-store.service';
import { map } from 'rxjs/operators';

import * as L from 'leaflet';
import 'leaflet.markercluster';
import { environment } from 'src/environments/environment';
import { Subject, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit, OnDestroy {

  // @ViewChild('maskmap', { static: true }) chartElement: ElementRef;

  assetsUrl = environment.assetsUrl;

  map: any;
  pharmacyList: Array<any>;
  curPharmacy: Array<any>;
  group: L.MarkerClusterGroup;
  icons: any;
  prevPoint: any;
  curPos = [25.0032999, 121.5540404];
  curPos$ = new BehaviorSubject(this.curPos);

  constructor(
    public appService: AppService,
    public appStoreService: AppStoreService
  ) {
    this.getPosition();
    this.appStoreService.getPharmacy$.pipe(
      map(res => {
        if (!res) { return; }
        const info = res.reduce((total, el) => {
          total.push({ ...el.properties, coordinates: [el.geometry.coordinates[1], el.geometry.coordinates[0]] });
          return total;
        }, []);
        return info;
      })
    ).subscribe(res => {
      this.renderMap(res, res[0].coordinates);
    });
  }

  ngOnInit() {

    this.map = L.map('map', {
      center: [25.0032999, 121.5540404],
      zoom: 15,
      zoomControl: false,
      layers: [L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution: '&copy; 口罩地圖 by <a href="https://mtwmt.github.io/">Mandy</a>' }
      )]
    });

    this.appStoreService.getCurInfo$.subscribe(res => {
      this.onPharmacy(res);
    });

    this.curPos$.subscribe(res => {
      this.curPos = res;
      this.map.setView(res, 15);
    });



    this.icons = {
      red: this.customIcon('red'),
      orange: this.customIcon('orange'),
      yellow: this.customIcon('yellow'),
      green: this.customIcon('green'),
      blue: this.customIcon('blue'),
      violet: this.customIcon('violet'),
      gold: this.customIcon('gold'),
      grey: this.customIcon('grey'),
    };
  }
  ngOnDestroy() {
    this.curPos$.unsubscribe();
  }
  renderMap(list: Array<any>, cur: any) {
    this.group = new L.MarkerClusterGroup().addTo(this.map);
    list.map((e, i) => {
      this.addMarker(e);
    });
    this.map.addLayer(this.group);
  }
  onPharmacy(info) {
    this.map
      .setView(info.coordinates, 16)
      .closePopup();

    if (this.prevPoint) {
      this.map.removeLayer(this.prevPoint);
    }

    this.prevPoint = L.marker(info.coordinates, { icon: this.icons.red })
      .addTo(this.map)
      .bindPopup(this.customPopup(info))
      .openPopup();
  }
  addMarker(info) {
    const marker = L.marker(info.coordinates, { icon: this.icons.grey }).bindPopup(this.customPopup(info))
    this.group.addLayer(marker);
  }
  customPopup(info) {
    // console.log('customPopup', info)
    return `
      <div class="customPopup">
        <div class="customPopup__title">${ info.name}</div>
        <div class="customPopup__block-left">
          <div class="customPopup__addr">${ info.address}</div>
          <div class="customPopup__note">${ info.note}</div>
          <div class="customPopup__phone">${ info.phone}</div>
        </div>
        <div class="customPopup__block-right">
          <div class="customPopup__block-flex">
            <div class="customPopup__child">
              <img src="${this.assetsUrl}/child.svg" />
              <p>${ info.mask_child}</p>
            </div>
            <div class="customPopup__adult">
              <img src="${this.assetsUrl}/adult.svg" />
              <p>${ info.mask_adult}</p>
            </div>
          </div>
          <a href="tel:${info.phone}" class="customPopup__tel">
            <img src="${this.assetsUrl}/tel.svg" />
          </a>
        </div>
        <a href="https://www.google.com/maps/dir/${this.curPos[0]},${this.curPos[1]}/${info.coordinates[0]},${info.coordinates[1]}" class="customPopup__google" target="_blank">
          <img src="${this.assetsUrl}/vecotr.svg" />規劃路線
        </a>
      </div>
    `;
  }
  customIcon(color: string) {
    return L.icon({
      iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  }
  getPosition() {
    navigator.geolocation.getCurrentPosition((data) => {
      const latitude = data.coords.latitude;
      const longitude = data.coords.longitude;
      this.curPos$.next([latitude, longitude]);
    });
  }
}


// lat: 22.xxxx  lng: 120.xxxx
