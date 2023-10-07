import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router) {}

  @Input() product: Product = {} as Product;
  addToCart(product: Product) {
    console.log("Clicked", product)
    const payload = {
      productId: product.id,
      quantity: 1
    }
    if(localStorage.getItem("token"))
    {
    this.cartService.addToCart(payload).subscribe(
      (data) => {
        console.log("Added", data)
      }
      
    )
    }
    else
    {
      this.router.navigate(["/login"])
    }
  }

  onProductClick(product: Product){
    this.router.navigate(['/products', product.id]);
  }

  ngOnInit(): void {
    
  }
}
