import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { IProducts } from '../../modal/products.modal';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  listData: IProducts[] | undefined;

  products(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('assets/json/products.json').pipe(
      map(res => {
        return res;
      }),
    );
  }

  public getProduct(id: number): Observable<IProducts | undefined> {
    return this.products().pipe(
      map(items => {
        return items.find((item: IProducts) => {
          return item.id === id;
        });
      }),
    );
  }
}
