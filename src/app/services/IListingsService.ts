import {Observable} from 'rxjs/Observable';
import {Listing} from '../model/listing';

export interface IListingsService {

  getListings(): Observable<Listing[]>;

  getListingDetails(id: string): Observable<Listing>;

  addListing(listing: Listing, image: File | null);

  editListing(listing: Listing, id: string);

  deleteListing(id: string);
}
