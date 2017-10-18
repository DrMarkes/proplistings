import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from 'firebase';

import {Listing} from '../../model/listing';
import {ListingsService} from '../../services/listings.service';

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
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.listingsService.getListingDetails(this.id)
      .subscribe(listing => {
        this.listing = listing;

        if(this.listing.path) {
          let storageRef = firebase.storage().ref();
          let spaceRef = storageRef.child(this.listing.path);
          spaceRef.getDownloadURL().then(url => {
            this.imageUrl = url;
          })
            .catch(error => {
              console.log(error.message);
            });
        }
      });
  }

  onDeleteListing() {
    this.listingsService.deleteListing(this.id);

    this.router.navigate(['/listings']);
  }
}
