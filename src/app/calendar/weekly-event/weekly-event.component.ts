import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekly-event',
  templateUrl: './weekly-event.component.html',
  styleUrls: ['./weekly-event.component.css']
})
export class WeeklyEventComponent implements OnInit {

  @Input() eventText: string = "";

  @Input() backgroundImage: any;

  @Input() isActive: boolean = false;

  @Input() mondayActive: boolean = false;
  @Input() tuesdayActive: boolean = false;
  @Input() wednesdayActive: boolean = false;
  @Input() thursdayActive: boolean = false;
  @Input() fridayActive: boolean = false;
  @Input() saturdayActive: boolean = false;
  @Input() sundayActive: boolean = false;

  eventModalOpen: boolean = false;

  @Input() eventName: string;
  @Input() calText: string = "Txt Here";
  
  @Input() whenText: string;
  @Input() locationText: string;

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
