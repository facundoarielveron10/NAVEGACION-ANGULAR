import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productsList } from './products.mock';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, NgFor, CurrencyPipe, NgClass],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productsList = productsList;
}
