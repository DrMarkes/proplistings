import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListingsService} from '../../services/listings.service';
import {Listing} from "../../model/listing";

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  private id: string;
  title: string;
  city: string;
  owner: string;
  bedrooms: number;
  type: string;
  price: string;

  constructor(private listingsService: ListingsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.listingsService.getListingDetails(this.id)
      .subscribe(listing => {
        this.title = listing.title;
        this.city = listing.city;
        this.owner = listing.owner;
        this.bedrooms = listing.bedrooms;
        this.type = listing.type;
        this.price = listing.price;
      });
  }

  onEditSubmit() {
    let listing: Listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      type: this.type,
      price: this.price
    };

    this.listingsService.editListing(listing, this.id);

    this.router.navigate(['/listings']);
  }
}
