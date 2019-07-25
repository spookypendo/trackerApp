import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
    weeklyReportChart = {
        title : {
            text: 'Today Registry',
            subtext: ''
        },
        tooltip: {
            trigger: 'item',
        },
        series: [
            {
                name: 'Daily summary',
                type: 'pie',
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
                data: [
                    {value: 0.6, name: 'Attended', itemStyle: {color: '#2786C4'}},
                    {value: 0.3, name: 'Tracked', itemStyle: {color: '#6BDBEF'}},
                    {value: 0.1, name: 'Missed', itemStyle: {color: '#D32F2F'}}
                ]
            }
        ]
    };

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
        data: [ 'Attended', 'Missed', 'Tracked'],
        x: 'right',
        orient: 'vertical'
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
            name: 'Attended',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [23, 40, 34, 54, 43, 56, 60],
            itemStyle: {color: '#2786C4'}
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
            data: [15, 6, 3, 4, 3, 0, 5],
            itemStyle: {color: '#6BDBEF'}
        },
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
            data: [10, 13, 3, 11, 3, 0, 4],
            itemStyle: {color: '#D32F2F'}
        }
    ]
};

constructor() { }

  public test = 2;

  ngOnInit() {
  }
}

