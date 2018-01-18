import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './Carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { VerticalLeftComponent } from './VerticalLeft/verticalLeft.component';
import { ListComponent } from './ListOfChoosenCricket/list.component';
import { PlayerComponent } from './player_components/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    LoginComponent,
    PlayerComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
