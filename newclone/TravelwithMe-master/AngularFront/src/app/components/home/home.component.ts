

import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import {Auth0Service} from '../../services/auth0.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
private lclscrolljs = require('./jquery.localscroll.js');
private scrollTojs = require('./jquery.scrollTo.js');
  constructor(

    private auth: Auth0Service,
    private route:Router,

  ) { }

  ngOnInit() {
  }

}
