import { Component, OnInit } from '@angular/core';
import { Playlist } from '../shared/models/playlist.model';
import { PlaylistService } from './playlist.service'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})

export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  newPlaylistBody: string = ''
  selectedPlaylist: Playlist | null = null;

  constructor(private playlistService: PlaylistService){

  }

  ngOnInit(): void {
    this.playlistService.getPlaylists().subscribe(playlists => this.playlists = playlists)
  }

  addPlaylist(){
    if (!this.newPlaylistBody.trim){
      return;
    }

    const playlist = {
    }
  }
}
