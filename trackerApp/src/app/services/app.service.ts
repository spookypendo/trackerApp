import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';

import {AppointmentRegistries} from 'src/app/models/appointment-registries.model';
import {VisitRegistries} from 'src/app/models/visit-registries.model';
import {Tracking} from 'src/app/models/tracking.model';
import {PatientDetails} from 'src/app/models/patient-details.model';
import {PromiseToCome} from 'src/app/models/promise-to-come.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getAllPatients(){
    return this.http.get<PatientDetails[]>('http://localhost:8080/view/patients');
  }

  getAppointments(){
    return this.http.get<AppointmentRegistries[]>('http://localhost:8080/view/appointments');
  }

  getPatientDetails(patient_ID){
    return this.http.get<PatientDetails[]>('http://localhost:8080/view/patients/'+patient_ID);
  }

  getAppointmentsListByDate(date){
    return this.http.get<AppointmentRegistries[]>('http://localhost:8080/view/appointments/'+date);
  }
}
