import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent {

  // Multiple
  multiple: Track[] = [
    {
      title: 'Example Audio File',
      link:
        'https://www.computerhope.com/jargon/m/example.mp3',
      duration: 208,
      artist: 'Cartoon'
    },
    {
      title: 'Example Audio File 2',
      link:
        'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3',
      duration: 208,
      artist: 'Cartoon'
    }
  ];

  msaapPlaylist: Track[] = this.multiple;

  currentTrack = null;
  currentTime: any;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [2, 4, 6];

  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;

  msaapTableHeader = 'My Playlist';
  msaapTitleHeader = 'My Title';
  msaapArtistHeader = 'My Artist';
  msaapDurationHeader = 'My Duration';

  appendTracksToPlaylistDisable = false;
  counter = 1;

  onEnded(event: any) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.

    // example
    this.currentTrack = null;
  }
  
  }