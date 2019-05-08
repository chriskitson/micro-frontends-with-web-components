import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-customelement',
  templateUrl: './customelement.component.html',
  styleUrls: ['./customelement.component.scss'],
  encapsulation: ViewEncapsulation.None // <- this allows CSS to bleed to this component from parent app
})
export class CustomelementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
