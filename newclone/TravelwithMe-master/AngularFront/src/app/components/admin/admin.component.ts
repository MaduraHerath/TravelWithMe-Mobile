import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bodyClasses:string = "fixed-sn blue-skin";
  private chartjs = require('../../../../node_modules/chart.js/src/chart.js');
  constructor() {

  }

  ngOnInit() {
    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');

  }

}


