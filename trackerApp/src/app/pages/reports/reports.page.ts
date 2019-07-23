import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  constructor() { }

  public test = 2;

  ngOnInit() {
  }
  reportsBar = {
    title : {
      text: 'Weekly summary',
      subtext: '22 - 28 July 2019'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: [ 'Missed', 'Tracked', 'Appointment'],
        x:'right',
        orient:'vertical'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: [ 'Mon', 'Tues', 'Wedn', 'Thur', 'Fri', 'Sat', 'Sun']
    },
    series: [
        {
            name: 'Missed',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: 'Tracked',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Appointment',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
}

