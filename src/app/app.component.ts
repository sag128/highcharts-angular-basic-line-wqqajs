import { Component } from "@angular/core";
import * as Highcharts from 'highcharts';
import { Options } from "highcharts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
   Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    xAxis:
    {
      title:
      {
        text:'aaa'
      },



      categories:[
        '111',
        '222 (compare)'
      ]
    },
    series: [
      {
        type: 'area',
        data: [1],
        name:'test'
      
      },
      {
        type: 'area',
        data: [2],
        name:'test2'
      
      },
      {
        type: 'area',
        data: [3],
        name:'test3'
      
      },
      {
        type: 'area',
        data: [null,10],
        name:'test (compare)'
      },
      {
        type: 'area',
        data: [null,5],
        name:'test2 (compare)'
      },
      {
        type: 'area',
        data: [null,11],
        name:'test3 (compare)'
      }
    ]
  };

}
