import { Component, OnInit } from '@angular/core';
import { DatetimeChangeEventDetail } from '@ionic/angular';
import { IonDatetimeCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {


  fecNac: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event: any ) {
    console.log(event);
    console.log(new Date( event.detail.value ));
  }

}
