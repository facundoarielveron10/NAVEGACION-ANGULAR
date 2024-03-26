import {
  CurrencyPipe,
  NgClass,
  NgIf,
  NgStyle,
  TitleCasePipe,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, NgIf, NgStyle],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe((params) => {
        this.product = productsList.find(
          (product) => product.id == params['productId']
        );
        this.color = this.product && this.product.price >= 5 ? '#03ff03' : '';
      });
      this.loading = false;
    }, 3000);
  }
}
