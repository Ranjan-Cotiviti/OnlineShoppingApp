import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SingleProductComponent } from '../single-product/single-product.component';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = true

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        this.products = data;
        this.loading = false
      },
      (error) => {
        console.error('Error fetching products: ', error);
      }
    );
  }
}
