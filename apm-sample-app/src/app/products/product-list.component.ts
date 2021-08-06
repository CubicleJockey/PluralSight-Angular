import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';


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
    
    ngOnInit(): void {
        console.log('OnInit life-cycle hook has fired.');
        this.filter = 'cart';
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

    public filteredProducts: IProduct[] = [];

    private products: IProduct[] = [
        {
            "id": 1,
            "name": "Leaf Rake",
            "code": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "id": 2,
            "name": "Garden Cart",
            "code": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
          {
            "id": 5,
            "name": "Hammer",
            "code": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
          },
          {
            "id": 8,
            "name": "Saw",
            "code": "TBX-0022",
            "releaseDate": "May 15, 2021",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/saw.png"
          },
          {
            "id": 10,
            "name": "Video Game Controller",
            "code": "GMG-0042",
            "releaseDate": "October 15, 2020",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "assets/images/xbox-controller.png"
          }
    ];

    toggleImage() : void {
        this.showImage = !this.showImage;
    };

    onRatingClicked(message: string): void {
        this.pageTitle = `Product List: ${message}`;
    }
}