import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
