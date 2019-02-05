import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { JQ_TOKEN, TOASTR_TOKEN, Toastr } from './common/index';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShopHomePageComponent } from './pages/shop/shop-home-page/shop-home-page.component'

import { RouterModule } from '@angular/router'
import { appRoutes } from './routes/routes';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { SaleSectionComponent } from './sale-section/sale-section.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { OnTapComponent } from './pages/on-tap/on-tap.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CalendarDayComponent } from './calendar/calendar-day/calendar-day.component';
import { DayComponent } from './calendar/day/day.component';
import { WeeklyEventComponent } from './calendar/weekly-event/weekly-event.component';
import { CarouselComponent } from './carousel/carousel.component';

import { HttpClientModule } from '@angular/common/http';

import { TapService } from './pages/on-tap/on-tap.service/on-tap.service'

export declare let jQuery: Object; 
export declare let toastr: Toastr;

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ShopHomePageComponent,
    FooterComponent, 
    AboutPageComponent,
    CalendarComponent,
    FoodMenuComponent,
    SaleSectionComponent,
    ImageCarouselComponent,
    OnTapComponent,
    ContactPageComponent,
    CalendarDayComponent,
    DayComponent,
    WeeklyEventComponent,
    CarouselComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    TapService,
    {
      provide: JQ_TOKEN, useValue: jQuery
    },
    {
      provide: TOASTR_TOKEN, useValue: toastr
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }