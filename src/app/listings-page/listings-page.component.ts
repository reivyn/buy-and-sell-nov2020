import { Component, OnInit } from '@angular/core';
import {Listing} from '../../../../buy-and-sell-frontend/src/app/types';
import {listings} from '../fake-listings';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listings = listings;
  }

}
