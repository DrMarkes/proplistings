import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Listing} from "../model/listing";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class FirebaseService {
  listings: Observable<Listing[]>;

  constructor(private db: AngularFireDatabase) { }

  getListings(): Observable<Listing[]> {
    this.listings = this.db.list('listings').valueChanges();

    return this.listings;
  }

}
