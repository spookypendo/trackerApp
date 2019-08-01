import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from "@angular/router";

import {AppointmentRegistries} from '../../models/appointment-registries.model';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.page.html',
  styleUrls: ['./appointment-summary.page.scss'],
})
export class AppointmentSummaryPage implements OnInit {

  public appointments: AppointmentRegistries[] = [];
  public patient_ID : string;
  constructor(private appService : AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.patient_ID = this.route.snapshot.paramMap.get("patient_ID");
    this.appService.getAppointmentById(this.patient_ID).subscribe((data: AppointmentRegistries[]) => {
            this.appointments = data;
          });
  }
}
