import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service'; 
import { Artist } from '../shared/models/artist'; 

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {
searchStr: string; 
searchRes: Artist[]; 

  searchMusic() { 
    this.service.searchMusic(this.searchStr)
      .subscribe(res => this.searchRes = res.artists.items );
  }

  constructor(private service: SpotifyService) { }

  ngOnInit() {
  }

}
