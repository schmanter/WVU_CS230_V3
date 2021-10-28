import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadPageComponent } from './body/download/download-page.component';
import { GamesPageComponent } from './body/games/games-page.component';
import { DiscoveryPageComponent } from './body/home/discovery.component';
import { TrendingPageComponent } from './body/home/trending.component';
import { GameOneComponent } from './sidebar/game-routing/game-one.component';

const routes: Routes = [
  { path: 'trending', component: TrendingPageComponent },
  { path: 'discovery', component: DiscoveryPageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'download', component: DownloadPageComponent },
  { path: 'game-one', component: GameOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

