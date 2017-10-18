import { Component, OnInit } from '@angular/core';

import {Listing} from "../../model/listing";
import {ListingsService} from "../../services/listings.service";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: Listing[];

  constructor(public listingsService: ListingsService) { }

  ngOnInit() {
    this.listingsService.getListings()
      .subscribe(listings => {
        this.listings = listings;
      });
  }

}
