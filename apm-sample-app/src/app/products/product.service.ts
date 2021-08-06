import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private productUrl: string = '/api/products/products.json';

  constructor(private http: HttpClient){ } 

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
                .pipe(
                  tap(data => console.log(`All: ${JSON.stringify(data)}`)),
                  catchError(this.handleError)
                );
  }

  private handleError(errReponse: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (errReponse.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${errReponse.error.message}`;
    } else {
      errorMessage = `Server returned code: ${errReponse.status}, error message is ${errReponse.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}