import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientSummaryPage } from './patient-summary.page';

import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: PatientSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDm9hflD2s237SNfjMoMq2I4FHPLTzG48Q'
    })
  ],
  declarations: [PatientSummaryPage]
})
export class PatientSummaryPageModule {}
