import {Observable} from 'rxjs/Observable';
import {Listing} from '../model/listing';
import {Injectable} from "@angular/core";

import {IListingsService} from './IListingsService';

@Injectable()
export abstract class ListingsService implements IListingsService{
  protected listings: Observable<Listing[]>;
  protected listing: Observable<Listing>;
  protected folder: string;

  abstract getListings(): Observable<Listing[]>;

  abstract getListingDetails(id: string): Observable<Listing>;

  abstract addListing(listing: Listing, image: File | null);


  abstract editListing(listing: Listing, id: string);

  abstract deleteListing(id: string);
}
