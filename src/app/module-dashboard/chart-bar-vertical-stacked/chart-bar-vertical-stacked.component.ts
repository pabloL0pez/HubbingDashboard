import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-bar-vertical-stacked',
  templateUrl: './chart-bar-vertical-stacked.component.html',
  styleUrls: ['./chart-bar-vertical-stacked.component.scss']
})
export class ChartBarVerticalStackedComponent implements OnInit {

  barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales:
    {
      xAxes: [{
          stacked: true
      }],
      yAxes: [{
          stacked: true
      }]
    }
  };
  barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: '#1a237e',
      borderColor: '#1a237e',
      hoverBackgroundColor: '#283593',
    },
    { 
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor: '#303f9f',
      borderColor: '#303f9f',
      hoverBackgroundColor: '#3949ab',
    },
    {
      data: [50, 24, 55, 82, 33, 85, 61],
      label: 'Series C',
      backgroundColor: '#3f51b5',
      borderColor: '#3f51b5',
      hoverBackgroundColor: '#5c6bc0',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
