import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
  };
  barChartLabels = ['Apple', 'Orange', 'Banana'];
  barChartType = 'pie';
  barChartLegend = true;
  barChartData = [
    {
      data: [65, 59, 80],
      label: 'Series',
      backgroundColor: ['#00695c', '#2e7d32', '#558b2f'],
      borderColor: ['#00695c', '#2e7d32', '#558b2f'],
      hoverBackgroundColor: ['#00796b', '#388e3c', '#689f38'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
