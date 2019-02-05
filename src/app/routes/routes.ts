import { Routes } from '@angular/router'
//import { Error404Component } from './errors/404.component'

import { ShopHomePageComponent } from '../pages/shop/shop-home-page/shop-home-page.component'
import { OnTapComponent } from '../pages/on-tap/on-tap.component'
import { HomePageComponent } from '../pages/home-page/home-page.component'
import { AboutPageComponent } from '../pages/about-page/about-page.component'
import { ContactPageComponent } from '../pages/contact-page/contact-page.component'


export const appRoutes: Routes = [
    //{ path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'shop', component: ShopHomePageComponent },
    { path: 'on-tap', component: OnTapComponent },
    { path: 'on-tap/first-floor', component: OnTapComponent, data: {activeFilter: "First Floor", subtext: "Breweries from North Carolina"} },
    { path: 'on-tap/second-floor', component: OnTapComponent, data: {activeFilter: "Second Floor", subtext: "Breweries from Around the Country & World"} },
    { path: 'on-tap/third-floor', component: OnTapComponent, data: {activeFilter: "Third Floor", subtext: "Assorted"} },
    { path: 'on-tap/new', component: OnTapComponent, data: {activeFilter: "New", subtext: "New Beers to the Garden"} },
    { path: 'on-tap/local', component: OnTapComponent, data: {activeFilter: "Local Beers", subtext: ""} },
    { path: 'on-tap/seasonal', component: OnTapComponent, data: {activeFilter: "Seasonal Beers", subtext: ""} },
    { path: 'on-tap/ipas', component: OnTapComponent, data: {activeFilter: "IPAs", subtext: ""} },
    { path: 'on-tap/porters-and-stouts', component: OnTapComponent, data: {activeFilter: "Porters & Stouts", subtext: ""} },
    { path: 'on-tap/domestic', component: OnTapComponent, data: {activeFilter: "Domestic Beers", subtext: ""} },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent },
    //{ path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
    //{ path: 'events/session/new', component: CreateSessionComponent },
    //{ path: '404', component: Error404Component },
    { path: 'home', component: HomePageComponent },
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    //{ path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]