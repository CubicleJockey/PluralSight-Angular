import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public pageTitle: string = 'Product Detail'
  public productId?: number;
  public product: IProduct | undefined;


  //Note: Route SnapShot is used when needing to only read the parameter once
  constructor(private route: ActivatedRoute
             ,private router: Router
             ,private productsService: ProductService) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.productsService.getProducts().subscribe({
      next: products => {
        this.product = products.find(product => product.id === this.productId);
      },
      error: err => console.log(err)
     });

    //Observable: Read emitted parameters as they change.
    this.route.paramMap.subscribe(
      params => console.log(`Parameter from observable: ${params.get('id')}`)
    );
  }

  public onBack(): void {
    this.router.navigate(['/products']);
  }
}