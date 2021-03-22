import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  constructor(private spotify: SpotifyService) {
    // this.http
    //   .get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe((res: any) => {
    //     this.paises = res;
    //     console.log(res);
    //   });

    this.spotify.getNewReleqases().subscribe((data: any) => {
      this.newSongs = data.albums.items;
      console.log(this.newSongs);
    });
  }

  ngOnInit(): void {}
}
