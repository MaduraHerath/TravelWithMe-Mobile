import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewidjet',
  templateUrl: './typewidjet.component.html',
  styleUrls: ['./typewidjet.component.css']
})
export class TypewidjetComponent implements OnInit {
  private typejs = require('./typewidjet.js');
  constructor() { }

  ngOnInit() {
  }

}
