import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {AppService} from '../../services/app.service';

import { Observable } from 'rxjs/Observable';

import {AppointmentRegistries} from '../../models/appointment-registries.model';
import {VisitRegistries} from '../../models/visit-registries.model';
import {Tracking} from '../../models/tracking.model';
import {PatientDetails} from '../../models/patient-details.model';
import {PromiseToCome} from '../../models/promise-to-come.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  weeklyStatsBarChart = {
    // title : {
      //  text: 'Weekly summary',
      //  subtext: ''
    // },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        data: [ 'Attended', 'Tracked', 'Missed'],
        x: 'right',
        orient: 'horizontal',
        textStyle: {fontSize: 10},
        itemGap: 5,
        itemWidth: 10,
        symbolRadius: 0
    },
    toolbox: {
       show : false,
       feature : {
           magicType : {show: true, title: '', type: ['line', 'bar']},
           saveAsImage : {show: true, title: 'save'}
       }
    },
    calculable : true,
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: false
      }
    ],
    series: [
      {
        name: 'Attended',
        type: 'bar',
        color: '#2786C4',
        barWidth: '20%',
        containLabel: true,
        data: [23, 40, 34, 54, 43, 56, 6]
      },
      {
        name: 'Tracked',
        type: 'bar',
        color: '#6BDBEF',
        barWidth: '20%',
        data: [15, 6, 14, 4, 0, 10, 5]
      },
      {
        name: 'Missed',
        type: 'bar',
        color: '#D32F2F',
        barWidth: '20%',
        data: [10, 13, 3, 11, 3, 0, 4]
      }
    ],
  };

  dailyStatsDoughnutChart = {
    // title : {
      //  text: 'Todays Registry',
      //  subtext: ''
    // },
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            name: 'Daily summary',
            type: 'pie',
            radius: ['50%', '80%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
              {value: 0.6, name: 'Attended', itemStyle: {color: '#2786C4'}},
              {value: 0.3, name: 'Tracked', itemStyle: {color: '#6BDBEF'}},
              {value: 0.1, name: 'Missed', itemStyle: {color: '#D32F2F'}}
            ]
        }
    ]
  };
  public countTotal: any;
  constructor(private appService: AppService) {}

  ngOnInit() {

  }
}
