import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { AppStoreService } from '../app-store.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import * as L from 'leaflet';
import 'leaflet.markercluster';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('maskmap', { static: true }) chartElement: ElementRef;

  map;

  pharmacyList: Array<any>;
  curPharmacy: Array<any>;

  group: L.MarkerClusterGroup;

  markers = [];

  icons: any;

  constructor(
    public appService: AppService,
    public appStoreService: AppStoreService
  ) {
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
    this.appStoreService.getCurInfo$.subscribe(res => {
      this.onPharmacy(res);
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

    console.log(3423,this.icons.red)
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
  renderMap(list: Array<any>, cur: any) {
    console.log('asdad', list, cur);

    this.map = L.map('map', {
      center: cur,
      zoom: 16,
      layers: [L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }
      )]
    });

    this.group = new L.MarkerClusterGroup().addTo(this.map);

    // this.markers = [];
    list.map((e, i) => {
      this.addMarker(e);
    });

    this.map.addLayer(this.group);
  }
  customPopup( info ){
    console.log('customPopup', info )
    return `
      <div class="customPopup">
        <div class="customPopup__title">${ info.name }</div>
        <div class="customPopup__block-left">
          <div class="customPopup__addr">${ info.address }</div>
          <div class="customPopup__note">${ info.note }</div>
          <div class="customPopup__phone">${ info.phone }</div>
        </div>
        <div class="customPopup__block-right">
          <div class="customPopup__block-flex">
            <div class="customPopup__child">
              <img src="../../assets/child.svg" />
              <p>${ info.mask_child}</p>
            </div>
            <div class="customPopup__adult">
              <img src="../../assets/adult.svg" />
              <p>${ info.mask_adult }</p>
            </div>
          </div>
          <a href="tel:${info.phone}" class="customPopup__tel">
            <img src="../../assets/tel.svg" />
          </a>
        </div>
        <a href="https://www.google.com/maps/dir/${info.coordinates[0]},${info.coordinates[1]}/" class="customPopup__google" target="_blank">
          <img src="../../assets/vecotr.svg" />規劃路線
        </a>
      </div>
    `;
  }
  onPharmacy(info) {
    // console.log('pos1', info)
    this.map
      .setView(info.coordinates, 18)
      .closePopup();

    const curPos: any = L.marker(info.coordinates);

    this.markers.map((e, i) => {
      if (e._latlng.lat === curPos._latlng.lat && e._latlng.lng === curPos._latlng.lng) {
        e.setIcon(this.icons.violet );
        e.bindPopup( this.customPopup(info) ).openPopup();
      }
    })


    // console.log('sda', this.markers, L.marker(pos))
    // this.markers = L.marker(pos)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();  // 預設開啟

  }

  ngAfterViewInit() { }


  addMarker(info) {
    // this.markers = [];
    const marker = L.marker(info.coordinates, { icon: this.icons.grey })
    this.group.addLayer(marker);
    this.markers.push(marker);
  }
}



    // L.marker([25.020995, 121.553407], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')  //MARK 加html
    //   .openPopup();  // 預設開啟

    // L.marker([25.036188, 121.546113]).addTo(this.map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();

    // L.marker([25.022541, 121.542921]).addTo(this.map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();
// lat: 22.xxxx  lng: 120.xxxx
