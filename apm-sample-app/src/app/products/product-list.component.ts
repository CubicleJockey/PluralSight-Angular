import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
     selector: 'pm-products'
    ,templateUrl: './product-list.component.html'
    ,styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit, OnDestroy {
    public pageTitle: string = 'Product List';
    public imageWidth: number = 50;
    public imageMargin: number = 2;
    public showImage: boolean = false;
    public message: string = '';
    public errorMessage: string = '';

    private products: IProduct[] = [];
    public filteredProducts: IProduct[] = [];
    
    private productSubscription!: Subscription;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        console.log('OnInit life-cycle hook has fired.');

        this.productSubscription = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products
            },
            error: err => this.errorMessage = err 
        });
    }

    ngOnDestroy(): void {
        this.productSubscription?.unsubscribe();
    }

    private _filter: string = '';

    get filter(): string{
        return this._filter;
    }

    set filter(text: string) {
        console.log(`Setting filter: [${text}]`);
        this._filter = text;

        this.filteredProducts = this.filterProducts(this._filter);
    }

    filterProducts(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => 
            product.name.toLocaleLowerCase().includes(filterBy)
        );
    }



    

    toggleImage() : void {
        this.showImage = !this.showImage;
    };

    onRatingClicked(message: string): void {
        this.pageTitle = `Product List: ${message}`;
    }
}