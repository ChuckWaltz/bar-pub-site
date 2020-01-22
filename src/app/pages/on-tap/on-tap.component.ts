import { Component, OnInit } from "@angular/core";

import { TapService } from "./on-tap.service/on-tap.service";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-on-tap",
  templateUrl: "./on-tap.component.html",
  styleUrls: ["./on-tap.component.css"]
})
export class OnTapComponent implements OnInit {
  constructor(
    private tapService: TapService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  filterActive: boolean = false;

  showSizes: boolean = true;

  filter: string = "";

  allBeers: any;

  subtext: string;

  subcats: Array<string> = [
    "Pilsners & Lagers",
    "Kolsch & Blondes",
    "Ambers & Reds",
    "Brown Ales",
    "Porters & Stouts",
    "Ciders",
    "Saisons & Farmhouse Ales",
    "Strong Ales",
    "Seasonal Beers",
    "Specialty Beers",
    "IPAs",
    "Pale Ales",
    "Wheat Beers",
    "Sour & Fruit Beers",
    "Other",
    "On Deck",
    "Meads"
  ];

  subcatOpen: boolean = true;

  ngOnInit() {
    this.tapService.getItems().subscribe(data => (this.allBeers = data));

    this.clearFilter();

    this.filter = this.route.snapshot.data["activeFilter"];
    this.subtext = this.route.snapshot.data["subtext"];

    if (this.route.snapshot.data["activeFilter"]) {
      this.filterActive = true;
    }
  }

  applyFilter(str: string, subtext: string) {
    this.filter = str;
    this.subtext = subtext;

    if (!this.filterActive) {
      this.filterActive = true;
    } else {
      this.filterActive = false;
    }
  }

  sizesToggle() {
    this.showSizes = !this.showSizes;
  }

  clearFilter() {
    this.applyFilter("", "");
    this.filterActive = false;
  }
}
