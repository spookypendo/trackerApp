import { Component, OnInit } from '@angular/core';

import {AppService} from '../../services/app.service';
import { Observable } from 'rxjs/Observable';

import {PatientDetails} from '../../models/patient-details.model';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-patient-summary',
  templateUrl: './patient-summary.page.html',
  styleUrls: ['./patient-summary.page.scss'],
})
export class PatientSummaryPage implements OnInit {
  public patient_details: PatientDetails[] = [];
  public patient_ID : string;
  constructor(private appService : AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.patient_ID = this.route.snapshot.paramMap.get("patient_ID");
    this.appService.getPatientDetails(this.patient_ID).subscribe((data: PatientDetails[]) => {
            this.patient_details = data;
          });
  }

}
