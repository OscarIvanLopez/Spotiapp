import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDO2aGF4drGCTlKIAdi0mQeeAPzwJI6TEh1En4FKbRKltQkS-UiIBOqsi-m8wYmjE9tSeVz_sdhv2iIY9s',
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

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getArtistTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
