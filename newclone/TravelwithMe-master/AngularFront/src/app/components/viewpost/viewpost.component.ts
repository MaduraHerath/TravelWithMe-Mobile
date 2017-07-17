import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewpost',
  styleUrls: ['viewpost.component.css'],
  templateUrl: './viewpost.component.html',
  encapsulation:ViewEncapsulation.None
})
export class ViewpostComponent implements OnInit {
  bodyClasses:string ="fixed-sn blue-skin";
  constructor() { }

  ngOnInit() {


    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');

  }

}
