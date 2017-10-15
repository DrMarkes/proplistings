import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";

import {Listing} from "../model/listing";

@Injectable()
export class FirebaseService {
  listings: Observable<Listing[]>;
  private listing: Observable<Listing>;

  constructor(public db: AngularFireDatabase) { }

  getListings(): Observable<Listing[]> {
    this.listings = this.db.list('/listings').snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
      }) as Observable<Listing[]>;

    return this.listings;
  }

  getListingDetails(id: string): Observable<Listing> {
    this.listing = this. db.object('listings/' + id).valueChanges() as Observable<Listing>;

    return this.listing;
  }
}
