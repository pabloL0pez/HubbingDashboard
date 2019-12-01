import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-bar-vertical',
  templateUrl: './chart-bar-vertical.component.html',
  styleUrls: ['./chart-bar-vertical.component.scss']
})
export class ChartBarVerticalComponent implements OnInit {
  barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    tooltips: false,
    onClick: this.handleOnClickEvent
  };
  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: '#222',
      borderColor: '#222',
      hoverBackgroundColor: '#444',
    },
    { 
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor: '#555',
      borderColor: '#555',
      hoverBackgroundColor: '#777',
    },
    {
      data: [50, 24, 55, 82, 33, 85, 61],
      label: 'Series C',
      backgroundColor: '#888',
      borderColor: '#888',
      hoverBackgroundColor: '#999',
    }
  ];
  chartRef;

  constructor() { }

  ngOnInit() {
    this.chartRef = document.getElementById("chart-bar-vertical");
  }

  private handleOnClickEvent() {
    console.log("holaa")
  }
}
