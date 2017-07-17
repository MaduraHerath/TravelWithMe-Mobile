import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sideview',
  templateUrl: './sideview.component.html',
  styleUrls: ['./sideview.component.css']
})
export class SideviewComponent implements OnInit {
  bodyClasses:string ="fixed-sn blue-skin";
  constructor() { }

  ngOnInit() {
    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');
  }

}
