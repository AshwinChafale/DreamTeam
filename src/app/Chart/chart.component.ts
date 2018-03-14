import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'my-chart',
  templateUrl: './chart.component.html',

})
export class ChartComponent {
  single: any[]  = [
    {
      "name": "Sachin",
      "value": 20
    },
    {
      "name": "Rohit",
      "value": 40
    },
    {
      "name": "Manoj",
      "value": 40
    },
    {
      "name": "Pandya",
      "value": 20
    },
    {
      "name": "Suresh",
      "value": 40
    },
    {
      "name": "Rahul",
      "value": 40
    },
    {
      "name": "Pandya",
      "value": 20
    },
    {
      "name": "Suresh",
      "value": 40
    },
    {
      "name": "Rahul",
      "value": 40
    },
    {
      "name": "Suresh",
      "value": 40
    },
    {
      "name": "Rahul",
      "value": 40
    }
  ];
  ;
  multi: any[];

  view: any[] = [600, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this.single)   
  }
  
  onSelect(event) {
    console.log(event);
  }
}