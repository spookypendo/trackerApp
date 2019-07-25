import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

import { Observable } from 'rxjs/Observable';

import {AppointmentRegistries} from '../../models/appointment-registries.model';
import {VisitRegistries} from '../../models/visit-registries.model';
import {Tracking} from '../../models/tracking.model';
import {PatientDetails} from '../../models/patient-details.model';
import {PromiseToCome} from '../../models/promise-to-come.model';

@Component({
  selector: 'app-appointment-registry',
  templateUrl: './appointment-registry.page.html',
  styleUrls: ['./appointment-registry.page.scss'],
})
export class AppointmentRegistryPage implements OnInit {

  public appointments: AppointmentRegistries[] = [];
  public date: Date = new Date();
  constructor(private appService : AppService) { }

  ngOnInit() {
    this.appService.getAppointmentsListByDate(this.date.toISOString().slice(0,10)).subscribe((data: AppointmentRegistries[]) => {
            this.appointments = data;
          });
  }

}
