import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'my-chart',
  templateUrl: './chart.component.html',

})
export class ChartComponent {

  single: any[]  = [];
  multi: any = JSON.parse(localStorage.getItem("analysis"));

  view: any[] = [600, 600];
  something : String
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
    console.log("sdsdsdsds");
    var array = JSON.stringify(this.multi);
    console.log(this.multi[1].name);
    console.log(this.multi);
    this.single = [
      {
        "name": this.multi[0].name,
        "value": this.multi[0].value
      },
      {
        "name": this.multi[1].name,
        "value": this.multi[1].value
      },
      {
        "name": this.multi[2].name,
        "value": this.multi[2].value
      },
      {
        "name": this.multi[3].name,
        "value": this.multi[3].value
      },
      {
        "name": this.multi[4].name,
        "value": this.multi[4].value
      },
      {
        "name": this.multi[5].name,
        "value": this.multi[5].value
      },
      {
        "name": this.multi[6].name,
        "value": this.multi[6].value
      },
      {
        "name": this.multi[7].name,
        "value": this.multi[7].value
      },
      {
        "name": this.multi[8].name,
        "value": this.multi[8].value
      },
      {
        "name": this.multi[9].name,
        "value": this.multi[9].value
      },
      {
        "name": this.multi[10].name,
        "value": this.multi[10].value
      }
    ];
    Object.assign(this.single);   
  }
  
  onSelect(event) {
    console.log(event);
  }
}