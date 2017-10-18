import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Listing} from '../../model/listing';
import {ListingsService} from '../../services/listings.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  title: string;
  city: string;
  owner: string;
  bedrooms: number;
  type: string;
  price: string;

  constructor(private listingsService: ListingsService,
              private router: Router) { }

  ngOnInit() {

  }

  onAddSubmit() {
    let listing: Listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      type: this.type,
      price: this.price
    };

    let image = (<HTMLInputElement>document.getElementById('image')).files[0];

    this.listingsService.addListing(listing, image);

    this.router.navigate(['/listings/']);
  }
}
