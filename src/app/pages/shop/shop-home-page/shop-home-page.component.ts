import { Component, OnInit, HostListener, Inject } from '@angular/core';

import { JQ_TOKEN } from '../../../common/index';

@Component({
  selector: 'app-shop-home-page',
  templateUrl: './shop-home-page.component.html',
  styleUrls: ['./shop-home-page.component.css']
})
export class ShopHomePageComponent implements OnInit {

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
    
        this.$(".fill-screen").css("height", window.innerHeight); //Sets the height initially
        this.$(".fill-screen-left").css("height", window.innerHeight); //Sets the height initially
        this.$(".fill-screen-right").css("height", window.innerHeight); //Sets the height initially

        this.$(".fill-screen-half").css("height", window.innerHeight / 2); //Sets the height initially
        
        //this.toastr.success("you did it!");
    
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.$(".fill-screen").css("height", window.innerHeight); //Sets the height on resize of window
    this.$(".fill-screen-left").css("height", window.innerHeight); //Sets the height on resize of window
    this.$(".fill-screen-right").css("height", window.innerHeight); //Sets the height on resize of window

    this.$(".fill-screen-half").css("height", window.innerHeight / 2); //Sets the height initially
  }

}
