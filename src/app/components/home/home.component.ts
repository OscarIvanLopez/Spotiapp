import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  newSongs: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  msgError: string = '';

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleqases().subscribe(
      (data: any) => {
        this.newSongs = data;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.error = true;
        this.msgError = err.error.error.message;
      }
    );
  }
}
