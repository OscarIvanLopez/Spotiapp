import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean = false;
  constructor(private spotify: SpotifyService) {}

  search(term: string) {
    this.loading = true;
    this.spotify.getArtists(term).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }
}
