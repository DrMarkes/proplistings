import {Routes} from '@angular/router';

import {HomeComponent} from '../components/home/home.component';
import {ListingsComponent} from '../components/listings/listings.component';
import {ListingComponent} from '../components/listing/listing.component';
import {AddListingComponent} from '../components/add-listing/add-listing.component';
import {EditListingComponent} from '../components/edit-listing/edit-listing.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: 'add-listing', component: AddListingComponent},
  {path: 'edit-listing/:id', component: EditListingComponent},
];
