import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('gmap', { static: true }) gmap: ElementRef<HTMLDivElement>;

  map: google.maps.Map;

  ngAfterViewInit(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, {
      zoom: 15,
      center: new google.maps.LatLng(52.2340641, 21.0210257),
    });
  }
}
