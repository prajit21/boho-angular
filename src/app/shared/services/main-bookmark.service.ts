import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { Allbookmark } from '../data/data/main-bookmark/all-bookmark';

@Injectable({
  providedIn: 'root',
})
export class MainBookmarkService {
  bookmarkData: Allbookmark[];
  private http = inject(HttpClient);

  bookmark(): Observable<Allbookmark[]> {
    return this.http.get<Allbookmark[]>('shared/data/data/main-bookmark/all-bookmark').pipe(
      map(res => {
        return res;
      }),
    );
  }

  public getbookmark(id: number): Observable<Allbookmark | undefined> {
    return this.bookmark().pipe(
      map(items => {
        return items.find((item: Allbookmark) => {
          return item.title_id === id;
        });
      }),
    );
  }
}
