import { Component, Inject, OnInit, OnChanges, HostListener, Input } from '@angular/core';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr} from '../common/index';
import { isNavigationCancelingError } from '@angular/router/src/shared';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    constructor(@Inject(JQ_TOKEN) private $: any, @Inject(TOASTR_TOKEN) private toastr: Toastr | Toastr) {} //The '| Toastr' is a band-aid to a bug that throws an error in the console
  
    calendarTitle: string = "March 2018";

    ngOnInit() {
  
      this.$(".fill-screen").css("height", window.innerHeight); //Sets the height initially
      this.$(".fill-screen-left").css("height", window.innerHeight); //Sets the height initially
      this.$(".fill-screen-right").css("height", window.innerHeight); //Sets the height initially
  
    }
  
    @HostListener('window:resize')
    onWindowResize() {
      this.$(".fill-screen").css("height", window.innerHeight); //Sets the height on resize of window
      this.$(".fill-screen-left").css("height", window.innerHeight); //Sets the height on resize of window
      this.$(".fill-screen-right").css("height", window.innerHeight); //Sets the height on resize of window
    
    }

}
