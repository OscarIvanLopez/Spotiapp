import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Liston');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBNtgOlLUTd6vANqpb8sVqFSh75Zggzo0LEBHzMTIKfvwuieZhPqm9ogEfhjNVCN6WvZeytMzTrpm0Dk40',
    });
    return this.http.get(url, { headers });
  }

  getNewReleqases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data['albums'].items)
    );
  }
  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=track%2Cartist&limit=20`).pipe(
      map((data: any) => data['artists'].items)
    );
  }
}
