import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
     selector: 'pm-products'
    ,templateUrl: './product-list.component.html'
    ,styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
    public pageTitle: string = 'Product List';
    public imageWidth: number = 50;
    public imageMargin: number = 2;
    public showImage: boolean = false;
    public message: string = '';

    
    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }

    ngOnInit(): void {
        console.log('OnInit life-cycle hook has fired.');
        this.filteredProducts = this.products;
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

    private products: IProduct[];
    public filteredProducts: IProduct[] = [];

    

    toggleImage() : void {
        this.showImage = !this.showImage;
    };

    onRatingClicked(message: string): void {
        this.pageTitle = `Product List: ${message}`;
    }
}