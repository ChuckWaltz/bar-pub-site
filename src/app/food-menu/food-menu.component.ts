import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})

export class FoodMenuComponent implements OnInit {

  constructor() { }

  active: boolean = false;
  active2: boolean = false;

  ngOnInit() {

  }

  toggleActive() {
    this.active = !this.active;
  }

  toggleActive2() {
    this.active2 = !this.active2;
  }

}
