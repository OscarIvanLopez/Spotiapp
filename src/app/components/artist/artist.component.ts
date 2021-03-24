import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  artist: any[] = [];
  images: any[] = [];
  nameArt: string = '';
  urlArt: string = '';
  loading: boolean = false;

  // Top tracks
  topTracks: any[] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
      this.getArtistTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe((data: any) => {
      this.artist = data;
      this.images = data.images;
      this.nameArt = data.name;
      this.urlArt = data.external_urls.spotify;
      this.loading = false;
    });
  }

  getArtistTopTracks(id: string) {
    this.spotify.getArtistTopTracks(id).subscribe((data: any) => {
      this.topTracks = data;
      console.log(this.topTracks);
    });
  }
}
