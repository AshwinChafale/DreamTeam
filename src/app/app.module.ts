import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './Carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { VerticalLeftComponent } from './VerticalLeft/verticalLeft.component';
import { ListComponent } from './ListOfChoosenCricket/list.component';
import { PlayerComponent } from './player/player.component';

import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteFilterExample } from './Autocomplete/autocomplete.component';
import { ChartComponent } from './Chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {
  MatFormFieldModule,
  MatInputModule,

} from '@angular/material';
import { AnalysisComponent } from './analysis/analysis.component';
import { FilterPipe } from './team/filter.pipe';




const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'player',
    component: PlayerComponent,
    //data: { title: 'Heroes List' }
  },
  {
    path: 'analysis',
    component: AnalysisComponent,
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    LoginComponent,
    PlayerComponent,
    TeamComponent,
    VerticalLeftComponent,
    ListComponent,
    AutocompleteFilterExample,
    ChartComponent,
    AnalysisComponent,
    FilterPipe




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
