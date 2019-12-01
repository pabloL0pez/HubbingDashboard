import { Component, OnInit } from "@angular/core";
import * as Chart from 'chart.js';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard-component.html',
    styleUrls: ['./dashboard-component.scss']
})
export class DashboardComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        Chart.defaults.global.elements.rectangle.borderWidth = 0;
    }
}