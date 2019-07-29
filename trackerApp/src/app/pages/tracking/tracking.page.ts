import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

import { Observable } from 'rxjs/Observable';
import {AppointmentRegistries} from '../../models/appointment-registries.model';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})

export class TrackingPage implements OnInit {

  public appointments: AppointmentRegistries[] = [];
  constructor(private appService : AppService) { }

  ngOnInit() {
    this.appService.getAppointmentsByStatus("Missed").subscribe((data: AppointmentRegistries[]) => {
            this.appointments = data;
          });
  }

  checkDays(date){
    var oneDay = 24*60*60*1000;
    var today = new Date();
    var year = parseInt(date.slice(0,4));
    var month = parseInt(date.slice(5,7)) - 1;
    var day = parseInt(date.slice(8,10));
    var appointment_date = new Date(date);
    if (appointment_date.getTime() < today.getTime()){
      var diffDays = Math.round(Math.abs((today.getTime() - appointment_date.getTime())/(oneDay)));
      if (diffDays >= 3 ) {
        return true;
        } else {
          return false;
        }
    } else {
      return false;
    }
  }
}
