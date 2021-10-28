import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesPageComponent } from './body/games/games-page.component';
import { TrendingPageComponent } from './body/home/trending.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { SearchComponent } from './header/search.component';
import { TopNavBarComponent} from './header/top-nav-bar.component';
import { TopNavButtons } from './header/top-nav-buttons.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { SideNavBarComponent } from './sidebar/side-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { DownloadPageComponent } from './body/download/download-page.component';
import { DiscoveryPageComponent } from './body/home/discovery.component';
import { GameOneComponent } from './sidebar/game-routing/game-one.component';
import { LeftSpacerComponent } from './body/spacer/left-spacer.component';
import { GameCard } from './body/games/game-card.component';
import { GamesCards } from './body/games/games-cards-model';
import { HttpClientModule } from '@angular/common/http'
import { UserInfoComponent } from './header/user-info.component';
import { PostInfoComponent } from './body/home/post-info.component';
import { EditPostInfoComponent } from './body/home/edit-post-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    TrendingPageComponent,
    SideNavBarComponent,
    LayoutMainComponent,
    SearchComponent,
    TopNavButtons,
    GamesPageComponent,
    DownloadPageComponent,
    DiscoveryPageComponent,
    GameOneComponent,
    LeftSpacerComponent,
    GameCard,
    UserInfoComponent,
    PostInfoComponent,
    EditPostInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
