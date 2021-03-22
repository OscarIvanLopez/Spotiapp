import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Liston');
  }

  getNewReleqases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCHBtGI_OrLbs-rhe5qg-gaGo3-mueAfl5h3NZGgDeDg9Yc4x-Cfx6hnadvyufFkFm3gAOP_K6NNSCpVEI',
    });

    return this.http.get(
      'https://api.spotify.com/v1/browse/new-releases?limit=20',
      { headers }
    );
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }
}
