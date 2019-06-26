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

  public count_total : any;
  constructor(private appService : AppService) {}

  ngOnInit() {
    this.appService.getCountTotal().subscribe(data => {
      this.count_total = data;
    });
  }

  weeklyStatsBarChart = {
    title : {
        text: 'Weekly summary',
        subtext: ''
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        data:['Attended','Missed'],
        x:'right',
        orient:'vertical'
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
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Attended',
        type: 'bar',
        color:'#3398DB',
        barWidth: '30%',
        containLabel: true,
        data: [10, 52, 200, 334, 390, 330, 220]
      },
      {
        name: 'Missed',
        type: 'bar',
        color: '#6BDBEF',
        barWidth: '30%',
        data: [12, 50, 100, 324, 350, 310, 200]
      }
    ],
  };

  dailyStatsDoughnutChart = {
    title : {
        text: 'Today Registry',
        subtext: ''
    },
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            name:'Daily summary',
            type:'pie',
            radius: ['30%', '50%'],
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
            data:[
                {value:0.7, name:'Attended', itemStyle: {color: '#3398DB'}},
                {value:0.3, name:'Missed', itemStyle: {color: '#6BDBEF'}}
            ]
        }
    ]
};

}
