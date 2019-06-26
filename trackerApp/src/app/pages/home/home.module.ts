import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxEchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
