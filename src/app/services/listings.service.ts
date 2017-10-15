import {Observable} from 'rxjs/Observable';
import {Listing} from '../model/listing';
import {Injectable} from "@angular/core";

import {IListingsService} from './IListingsService';

@Injectable()
export abstract class ListingsService implements IListingsService{
  protected listings: Observable<Listing[]>;
  protected listing: Observable<Listing>;
  protected folder: string;

  getListings(): Observable<Listing[]> {
    throw new Error("Method not implemented.");
  }

  getListingDetails(id: string): Observable<Listing> {
    throw new Error("Method not implemented.");
  }

  addListing(listing: Listing, image: File) {
    throw new Error("Method not implemented.");
  }


}
