import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService }  from './in-memory-data.service';
import {HttpClientModule} from '@angular/common/http'; 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports:
   [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
