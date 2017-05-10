import { SpotifyService } from './services/spotify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'; 

import { UserService } from './services/user.service'; 
import { ResourceService } from './services/resource.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TwitterComponent } from './twitter/twitter.component';
import { UsersComponent } from './users/users.component';
import { ResourcesComponent } from './resources/resources.component';
import { SpotifyComponent } from './spotify/spotify.component';
;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TwitterComponent,
    UsersComponent,
    ResourcesComponent,
    SpotifyComponent,

  ],
  imports: [  
    BrowserModule,
    routing,
    FormsModule,
    HttpModule, 
  ],
  providers: [ UserService, ResourceService, SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
