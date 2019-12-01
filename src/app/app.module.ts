import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './module-dashboard/dashboard-component';
import { ChartBarVerticalComponent } from './module-dashboard/chart-bar-vertical/chart-bar-vertical.component';
import { ChartBarVerticalStackedComponent } from './module-dashboard/chart-bar-vertical-stacked/chart-bar-vertical-stacked.component';
import { ChartPieComponent } from './module-dashboard/chart-pie/chart-pie.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartBarVerticalComponent,
    ChartBarVerticalStackedComponent,
    ChartPieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
