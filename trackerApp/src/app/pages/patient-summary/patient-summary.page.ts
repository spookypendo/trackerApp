import { Component, OnInit } from '@angular/core';

import {AppService} from '../../services/app.service';
import { Observable } from 'rxjs/Observable';

import {PatientDetails} from '../../models/patient-details.model';
import {VisitRegistries} from '../../models/visit-registries.model'

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-patient-summary',
  templateUrl: './patient-summary.page.html',
  styleUrls: ['./patient-summary.page.scss'],
})
export class PatientSummaryPage implements OnInit {

  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  public visit_details: VisitRegistries[] = [];
  public patient_ID : string;
  constructor(private appService : AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.patient_ID = this.route.snapshot.paramMap.get("patient_ID");
    this.appService.getVisitDetailsById(this.patient_ID).subscribe((data: VisitRegistries[]) => {
            this.visit_details = data;
          });
  }
}
