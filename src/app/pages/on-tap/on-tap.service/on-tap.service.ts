import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeer } from './beer.model';

@Injectable()
export class TapService {

    constructor(private http: HttpClient) { }

    beerUrl = 'database/on-tap.json';

    getItems(){
        return this.http.get(this.beerUrl);
    }

}