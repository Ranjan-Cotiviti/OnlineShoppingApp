import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Image, Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) { }
  productData: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  }
  displayedImage: string = "";

  loading: boolean = true;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; // '+' is used to convert the parameter to a number if it's a string
      this.productService.getProductDetails(productId).subscribe(
        (data: any) => {
          this.productData = data
          this.displayedImage = data.images[0].url;
          this.loading = false;
          console.log(data)
        },
        (error) => {
          console.error('Error fetching product details: ', error);
        }
      );
    });
  }

  productImages: Image[] = this.productData.images;


  onImageClick(imageUrl: string): void {
    this.displayedImage = imageUrl;
  }

  addToCart(product: Product) {
    console.log("Clicked", product)
    const payload = {
      productId: product.id,
      quantity: 1
    }
    this.cartService.addToCart(payload).subscribe(
      (data) => {
        console.log("Added", data)
      }
    )
  }
  
}
