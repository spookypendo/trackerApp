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

  getAllPatients() : Observable<PatientDetails[]> {
    return this.http.get<PatientDetails[]>('http://localhost:8080/view/patients');
  }

  getCountAttendees() {
    return this.http.get('http://localhost:8080/count/appointments/attended/:date');
  }

  getCountMissed(){
    return this.http.get('http://localhost:8080/count/appointments/missed/:date');
  }

  getCountTotal(){
    return this.http.get('http://localhost:8080/count/appointments');
  }
}
