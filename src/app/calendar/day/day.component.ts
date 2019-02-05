import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() eventName: string;
  @Input() calText: string;

  @Input() eventText: string;
  @Input() whenText: string;
  @Input() locationText: string;

  @Input() dayNumber: string;
  @Input() monthCurrent: boolean = true;

  @Input() isActive: boolean = false;

  @Input() event1Active: boolean = false;
  @Input() event2Active: boolean = false;
  @Input() event3Active: boolean = false;
  @Input() event4Active: boolean = false;
  @Input() event5Active: boolean = false;

  @Input() eventImage: any;
  
  modalActive: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }
  
  modalToggle(){
    if(!this.modalActive && this.isActive){
      this.modalActive = true;
    }else{
      this.modalActive = false;
    }
  }
  

}