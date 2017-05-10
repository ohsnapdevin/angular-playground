import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { TwitterComponent } from './twitter/twitter.component';
import { UsersComponent } from './users/users.component';
import { ResourcesComponent } from './resources/resources.component'; 
import { SpotifyComponent } from './spotify/spotify.component'; 

const appRoutes: Routes = [
    { path: 'spotify', component: SpotifyComponent }, 
    { path: 'resources', component: ResourcesComponent },
    { path: 'home', component: HomeComponent },
    { path: 'twitter', component: TwitterComponent }, 
    { path: 'users', component: UsersComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' } // Redirect to /home on page load
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 