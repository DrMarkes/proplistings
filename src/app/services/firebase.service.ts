import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase';

import {Listing} from '../model/listing';
import {ListingsService} from './listings.service';

@Injectable()
export class FirebaseService extends ListingsService{

  protected dbList: AngularFireList<Listing>;

  constructor(public db: AngularFireDatabase) {
    super();
    this.folder = 'listing-image';
    this.dbList = this.db.list('/listings');
  }

  getListings(): Observable<Listing[]> {
    this.listings = this.dbList.snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
      }) as Observable<Listing[]>;

    return this.listings;
  }

  getListingDetails(id: string): Observable<Listing> {
    this.listing = this.db.object('listings/' + id).snapshotChanges()
      .map(c => {
        return ({key: c.payload.key, ...c.payload.val()})
      }) as Observable<Listing>;

    return this.listing;
  }

  addListing(listing: Listing, image: File | null) {
    if(image) {
      let storageRef = firebase.storage().ref();
      let path = `/${this.folder}/${image.name}`;
      let iRef = storageRef.child(path);
      iRef.put(image).then(() => {
        listing.image = image.name;
        listing.path = path;
        return this.dbList.push(listing);
      });
    } else {
      return this.dbList.push(listing);
    }
  }

  editListing(listing: Listing, id: string) {
    this.dbList.update(id, listing);
  }

  deleteListing(id: string) {
    return this.dbList.remove(id);
  }
}
