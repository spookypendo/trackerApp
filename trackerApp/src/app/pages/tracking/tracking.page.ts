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

  public appointments : Observable<AppointmentRegistries[]>;
  constructor(private appService : AppService) { }

  ngOnInit() {
    this.appointments = this.appService.getAppointments();
  }

}
