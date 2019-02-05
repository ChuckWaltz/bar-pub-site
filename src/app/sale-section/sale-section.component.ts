import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-section',
  templateUrl: './sale-section.component.html',
  styleUrls: ['./sale-section.component.css']
})
export class SaleSectionComponent implements OnInit {

  constructor() { }

  eventTitle: string = "GROWLER SALE EVENT!"

  ngOnInit() {
  }

}
