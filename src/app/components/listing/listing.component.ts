import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Listing} from '../../model/listing';
import {ListingsService} from '../../services/listings.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: string;
  listing: Listing;
  imageUrl: any;

  constructor(private listingsService: ListingsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.listingsService.getListingDetails(this.id)
      .subscribe(listing => {
        this.listing = listing;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.listing.path);
      spaceRef.getDownloadURL().then(url =>{
        this.imageUrl = url;
      })
        .catch(error => {
          console.log(error.message);
        });
      });
  }

}
