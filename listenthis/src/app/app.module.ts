import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { AppComponent } from './app.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicHomeComponent } from './music-home/music-home.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    MusicHomeComponent,
    MusicPlayerComponent
  ],
  imports: [
    BrowserModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
